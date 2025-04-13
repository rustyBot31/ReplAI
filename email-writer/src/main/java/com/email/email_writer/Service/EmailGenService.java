package com.email.email_writer.Service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.email.email_writer.Entity.EmailRequest;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class EmailGenService {
    
    private final WebClient webClient;

    public EmailGenService(WebClient.Builder webClientBuilder) {
        this.webClient=webClientBuilder.build();
    }

    @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public String generateEmailReply(EmailRequest emailReq) {
        String prompt=buildPrompt(emailReq);
        Map<String, Object> reqBody = Map.of(
            "contents",new Object[] {
                Map.of("parts", new Object[] {
                    Map.of("text",prompt)
                })
            }
        );
        String response=webClient.post()
                    .uri(geminiApiUrl+geminiApiKey)
                    .header("Content-Type", "application/json")
                    .bodyValue(reqBody)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();
        
        return extractResponseContent(response);
    }

    private String extractResponseContent(String response) {
        try {
            ObjectMapper mapper=new ObjectMapper();
            JsonNode rootNode = mapper.readTree(response);
            return rootNode.path("candidates")
                           .get(0)
                           .path("content")
                           .path("parts")
                           .get(0)
                           .path("text")
                           .asText(); 
        } catch(Exception e) {
            return "Error processing request: "+e.getMessage();
        }
    }

    private String buildPrompt(EmailRequest emailReq) {
        StringBuilder prompt=new StringBuilder();
        prompt.append("Generate an email reply for the following email. Please do not generate a subject line ");
        if(emailReq.getTone()!=null && !emailReq.getTone().isEmpty()) {
            prompt.append("Use a ").append(emailReq.getTone()).append(" tone. ");
        }
        prompt.append("\nOriginal email : \n").append(emailReq.getEmailContent());
        return prompt.toString();
    }

}

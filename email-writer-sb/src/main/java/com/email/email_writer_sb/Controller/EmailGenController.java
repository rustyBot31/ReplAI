package com.email.email_writer_sb.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.email.email_writer_sb.Entity.EmailRequest;
import com.email.email_writer_sb.Service.EmailGenService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins="*")
@RequiredArgsConstructor
public class EmailGenController {
    
    private final EmailGenService emailService;

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailReq) {
        String response = emailService.generateEmailReply(emailReq);
        return ResponseEntity.ok(response);
    }
}

package com.email.email_writer.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.email.email_writer.Entity.EmailRequest;
import com.email.email_writer.Service.EmailGenService;

import lombok.Data;

@RestController
@RequestMapping("/api/email")
@Data
@CrossOrigin(origins = "*")
public class EmailGenControl {

    @Autowired
    private final EmailGenService emailService;

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailReq) {
        String response = emailService.generateEmailReply(emailReq);
        return ResponseEntity.ok(response);
    }
}

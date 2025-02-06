package com.ahmetabdullahgultekin.edutube;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;
import java.security.GeneralSecurityException;

@SpringBootApplication
public class EduTubeApplication {

    public static void main(String[] args) throws GeneralSecurityException, IOException {
        //KeyGenerator.generateSecretKey();
        GoogleDrive.initialize();
        SpringApplication.run(EduTubeApplication.class, args);
    }

}

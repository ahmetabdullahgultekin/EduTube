package com.ahmetabdullahgultekin.edutube.security;

import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;

import java.security.Key;

public class KeyGenerator {
    public static String generateSecretKey() {
        Key key = Keys.hmacShaKeyFor(Keys.secretKeyFor(io.jsonwebtoken.SignatureAlgorithm.HS256).getEncoded());
        String secretKey = Encoders.BASE64.encode(key.getEncoded());
        System.out.println("Generated Secret Key: " + secretKey);
        return secretKey;
    }
}
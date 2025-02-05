package com.ahmetabdullahgultekin.edutube.service;

import com.ahmetabdullahgultekin.edutube.exception.EmailAlreadyExistsException;
import com.ahmetabdullahgultekin.edutube.exception.InvalidCredentialsException;
import com.ahmetabdullahgultekin.edutube.model.User;
import com.ahmetabdullahgultekin.edutube.repository.UserRepository;
import com.ahmetabdullahgultekin.edutube.security.JwtUtil;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public ResponseEntity<Map<String, String>> register(User user) {
        try {
            user.setPassword(
                    passwordEncoder.encode(user.getPassword())
            );
            userRepository.save(user);
        } catch (DataIntegrityViolationException ex) {
            throw new EmailAlreadyExistsException("Email already exists: " + user.getEmail());
        }
        String token = jwtUtil.generateToken(user.getEmail());
        return ResponseEntity.ok(Collections.singletonMap("token", token));
    }

    public ResponseEntity<Map<String, String>> login(String email, String password) {
        try {
            Optional<User> user = userRepository.findByEmail(email);
            if (user.isEmpty() || !passwordEncoder.matches(password, user.get().getPassword())) {
                throw new InvalidCredentialsException("Invalid credentials!");
            }
        } catch (InvalidCredentialsException ex) {
            throw new InvalidCredentialsException("Invalid credentials!");
        } catch (Exception ex) {
            throw new RuntimeException("An error occurred while logging in!");
        }
        String token = jwtUtil.generateToken(email);
        return ResponseEntity.ok(Collections.singletonMap("token", token));
    }

    public User getUser(String email) {
        return userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    public String updatePassword(String email, String password) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        user.setPassword(passwordEncoder.encode(password));
        userRepository.save(user);
        return "Password updated successfully!";
    }

    public String updateRole(Long id, User.Role role) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setRole(role);
        userRepository.save(user);
        return "Role updated successfully!";
    }

    public String deleteUser(Long id) {
        userRepository.deleteById(id);
        return "User deleted successfully!";
    }

    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }
}

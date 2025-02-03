package com.ahmetabdullahgultekin.edutube.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    private String name;

    @Email(message = "Invalid email format")
    @Column(unique = true, nullable = false)
    @NotBlank(message = "Email is required")
    private String email;

    @Setter
    @Getter
    @Column(nullable = false)
    @NotBlank(message = "Password is required")
    private String password;
    @Enumerated(EnumType.ORDINAL)
    @Column(nullable = false)
    private Role role = Role.STUDENT;

    public String getPassword() {
        return password;
    }

    public enum Role {
        STUDENT, INSTRUCTOR, ADMIN
    }
}
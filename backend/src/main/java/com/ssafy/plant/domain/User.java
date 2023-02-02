package com.ssafy.plant.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.security.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, name = "user_id")
    private String userId;

    @Column(nullable = false)
    private String name;

    @Column(name = "profile_image_url")
    private String profileImageUrl;

    private String role;

    @CreatedDate
    @Column(name = "create_date")
    private Timestamp createdDate;

    @Builder
    public User(String userId, String name, String profileImageUrl, String role) {
        this.userId = userId;
        this.name = name;
        this.profileImageUrl = profileImageUrl;
        this.role = role;
    }



}

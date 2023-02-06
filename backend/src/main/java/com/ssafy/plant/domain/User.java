package com.ssafy.plant.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.security.Timestamp;
import java.time.LocalDateTime;

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

    private LocalDateTime createDate;

    @PrePersist // DB에 INSERT 되기 직전에 실행
    public void createDate() {
        this.createDate = LocalDateTime.now();
    }

    @Builder
    public User(String userId, String name, String profileImageUrl, String role) {
        this.userId = userId;
        this.name = name;
        this.profileImageUrl = profileImageUrl;
        this.role = role;
    }
}

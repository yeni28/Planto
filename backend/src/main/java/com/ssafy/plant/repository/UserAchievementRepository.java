package com.ssafy.plant.repository;

import com.ssafy.plant.domain.User;
import com.ssafy.plant.domain.UserAchievementEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserAchievementRepository extends JpaRepository<UserAchievementEntity, Integer> {
    List<UserAchievementEntity> findByUserOrderByCreated(User user);
}

package com.ssafy.plant.repository;

import com.ssafy.plant.domain.PotEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PotRepository extends JpaRepository<PotEntity, Long> {
}

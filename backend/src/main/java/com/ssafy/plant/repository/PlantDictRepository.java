package com.ssafy.plant.repository;

import com.ssafy.plant.domain.PlantDictEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlantDictRepository extends JpaRepository<PlantDictEntity, Long> {
}

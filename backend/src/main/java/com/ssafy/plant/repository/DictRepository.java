package com.ssafy.plant.repository;

import com.ssafy.plant.domain.DictEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DictRepository extends JpaRepository<DictEntity, Long> {
}

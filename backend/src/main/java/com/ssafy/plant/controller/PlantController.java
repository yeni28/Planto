package com.ssafy.plant.controller;

import com.ssafy.plant.dto.plantDto;
import com.ssafy.plant.service.PlantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/plant")
public class PlantController {

    private final PlantService plantService;

    @PostMapping("/{potId}")
    public ResponseEntity<String> createPlant(@PathVariable Long potId,
                                              @RequestBody plantDto dto) {
        return null;
    }

    @PutMapping("/{plantId}")
    public ResponseEntity<String> updatePlant(@PathVariable Long plantId,
                                              @RequestBody plantDto dto) {
        return null;
    }

    @DeleteMapping("/{plantId}")
    public ResponseEntity<String> updatePlant(@PathVariable Long plantId) {
        return null;
    }
}

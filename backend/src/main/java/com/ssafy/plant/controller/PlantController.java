package com.ssafy.plant.controller;

import com.ssafy.plant.dto.plant.PlantDto;
import com.ssafy.plant.dto.plant.PlantRegistDto;
import com.ssafy.plant.service.PlantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/plant")
public class PlantController {

    private final PlantService plantService;

    @PostMapping("/{potId}")
    public ResponseEntity<String> createPlant(PlantRegistDto dto, @PathVariable Long potId) throws ParseException {
        System.out.println(dto);
        plantService.식물등록(dto, potId);
        return ResponseEntity.status(HttpStatus.CREATED).body("식물등록");
    }

    @PutMapping("/{plantId}")
    public ResponseEntity<String> updatePlant(@PathVariable Long plantId,
                                              @RequestBody PlantDto dto) {
        return null;
    }

    @DeleteMapping("/{plantId}")
    public ResponseEntity<String> updatePlant(@PathVariable Long plantId) {

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }
}

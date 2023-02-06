package com.ssafy.plant.controller;

import com.ssafy.plant.domain.PotEntity;
import com.ssafy.plant.dto.PotDTO;
import com.ssafy.plant.service.PotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/pot")
public class PotController {

    @Autowired
    PotService potService;

    @PostMapping("")
    public ResponseEntity<String> setPot(@RequestBody PotDTO request){
        String result = potService.setPot(request);
        if (result.equals("presented")){
            return ResponseEntity.status(HttpStatus.OK).body("presented");
        } else {
            return ResponseEntity.status(HttpStatus.CREATED).body("created");
        }
    }
}

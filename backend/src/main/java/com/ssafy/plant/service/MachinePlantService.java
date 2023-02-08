package com.ssafy.plant.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.plant.domain.Plant;
import com.ssafy.plant.repository.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class MachinePlantService {

    @Autowired
    PlantRepository plantRepository;

    public void getPlant(Object payload) throws JsonProcessingException {
        Map<String, String> map = new HashMap<>();
        ObjectMapper objectMapper = new ObjectMapper();
        map = objectMapper.readValue(payload.toString(), map.getClass());

        long serialNo = Integer.parseInt(map.get("device_number"));
        int touch = Integer.parseInt(map.get("touch"));
        int attack = Integer.parseInt(map.get("attack"));

//        Plant plant = plantRepository.findById(serialNo).get();
//        touch += plant.getTouch();
//        attack += plant.getAttack();

//        plant.set
//
//        plant = Plant.builder()
//                .plantId(Long.parseLong(map.get("device_number")))
//                .temperature((int)Double.parseDouble(map.get("temperature")))
//                .humidity((int)Double.parseDouble(map.get("humidity")))
//                .sun((int)Double.parseDouble(map.get("light")))
//                .touch(touch)
//                .soilMoisture((int)Double.parseDouble(map.get("soil_moisture")))
//                .attack(attack)
//                .build();

//        System.out.println(plant.toString());
//        plantRepository.save(plant);

    }
}

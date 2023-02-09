package com.ssafy.plant.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.plant.domain.Plant;
import com.ssafy.plant.domain.PotEntity;
import com.ssafy.plant.repository.PlantRepository;
import com.ssafy.plant.repository.PotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class MachinePlantService {

    @Autowired
    PlantRepository plantRepository;

    @Autowired
    PotRepository potRepository;

    public void getPlant(Object payload) throws JsonProcessingException {
        Map<String, String> map = new HashMap<>();
        ObjectMapper objectMapper = new ObjectMapper();
        map = objectMapper.readValue(payload.toString(), map.getClass());

        long serialNo = Integer.parseInt(map.get("device_number"));
        int touch = Integer.parseInt(map.get("touch"));
        int attack = Integer.parseInt(map.get("attack"));

        PotEntity pot = potRepository.findByPotId(serialNo);
        Plant plant = pot.getPlant();
        touch += plant.getTouch();
        attack += plant.getAttack();

        plant.setTemperature((int)Double.parseDouble(map.get("temperature")));
        plant.setHumidity((int)Double.parseDouble(map.get("humidity")));
        plant.setSun((int)Double.parseDouble(map.get("light")));
        plant.setTouch(touch);
        plant.setAttack(attack);
        plant.setSoilMoisture((int)Double.parseDouble(map.get("soil_moisture")));

        plantRepository.save(plant);

    }
}

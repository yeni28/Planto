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

    @Autowired
    LikingService likingService;

    public void getPlant(Object payload) throws JsonProcessingException {
        Map<String, String> map = new HashMap<>();
        ObjectMapper objectMapper = new ObjectMapper();
        map = objectMapper.readValue(payload.toString(), map.getClass());

        long serialNo = Integer.parseInt(map.get("device_number"));
        int touch_status = Integer.parseInt(map.get("touch"));
        int attack = Integer.parseInt(map.get("attack"));

        PotEntity pot = potRepository.findByPotId(serialNo);
        Plant plant = pot.getPlant();
        int touch = plant.getTouch();
        attack += plant.getAttack();
        int liking = plant.getLiking();

        if (touch_status == 1){
            touch += 1;
        } else if(touch_status == 2){
            attack += 1;
        }
        System.out.println(touch);
        if (touch != 0 && touch % 10 == 0 && liking < 100){
            liking += 1;
            checkLiking(pot.getPotId(), liking);
        } else if (attack != 0 && attack % 40 == 0 && liking > 0){
            liking -= 1;
            checkLiking(pot.getPotId(), liking);
        }

        plant.setTemperature((int)Double.parseDouble(map.get("temperature")));
        plant.setHumidity((int)Double.parseDouble(map.get("humidity")));
        plant.setSun((int)Double.parseDouble(map.get("light")));
        plant.setTouch(touch);
        plant.setAttack(attack);
        plant.setLiking(liking);
        plant.setSoilMoisture((int)Double.parseDouble(map.get("soil_moisture")));

        System.out.println(plant);
        plantRepository.save(plant);
    }

    public void checkLiking(long potId, int liking) throws JsonProcessingException {
        //         기분 나쁜 플랜토
        if (liking < 30){
            likingService.sendLiking(potId, 0);

//         기본 플랜토
        } else if(liking < 70){
            likingService.sendLiking(potId, 1);

//         사랑받는 플랜토
        } else{
            likingService.sendLiking(potId, 2);
        }
    }
}

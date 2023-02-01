package com.ssafy.plant.controller;

import com.ssafy.plant.config.mqtt.MqttConfigSend;
import com.ssafy.plant.service.PlantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @Autowired
    MqttConfigSend.OutboundGateway outboundGateway;

    @Autowired
    PlantService plantService;

    @GetMapping("/hello")
    public String hello(){
//    mqtt publish test
        outboundGateway.sendToMqtt("test", "STM");
        return "Hello #1";
    }

//    식물 데이터 저장 api
//    @GetMapping("nongsaro")
//    public void getPlant(){
//        plantService.getPlant();
//    }
}

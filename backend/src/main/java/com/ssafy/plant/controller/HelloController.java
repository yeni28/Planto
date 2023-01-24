package com.ssafy.plant.controller;

import com.ssafy.plant.config.mqtt.MqttConfigSend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @Autowired
    MqttConfigSend.OutboundGateway outboundGateway;

    @GetMapping("/hello")
    public String hello(){
        outboundGateway.sendToMqtt("test", "STM");
        return "Hello #1";
    }
}

package com.ssafy.plant.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.plant.config.mqtt.MqttConfigSend;
import com.ssafy.plant.dto.LikingDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikingService {

    @Autowired
    MqttConfigSend.OutboundGateway outboundGateway;
    public void sendLiking() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        LikingDTO likingDTO = LikingDTO.builder().serialNo(123).liking(0).build();
        String likingJson = objectMapper.writeValueAsString(likingDTO);

        outboundGateway.sendToMqtt(likingJson, "STM/liking");
        System.out.println(likingJson);
    }
}

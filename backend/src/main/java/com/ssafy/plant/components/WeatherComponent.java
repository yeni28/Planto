package com.ssafy.plant.components;

import com.ssafy.plant.config.mqtt.MqttConfigSend;
import com.ssafy.plant.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class WeatherComponent {
    @Autowired
    MqttConfigSend.OutboundGateway outboundGateway;

    @Autowired
    WeatherService weatherService;

    @Scheduled(cron = "0 0 * * * *")
    public void getWeather(){
        String weathers = weatherService.getWeather();
        outboundGateway.sendToMqtt(weathers, "MTS");
    }
}

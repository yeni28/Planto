package com.ssafy.plant.controller;

import com.ssafy.plant.config.mqtt.MqttConfigSend;
import com.ssafy.plant.service.BoardService;
import com.ssafy.plant.dto.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HelloController {

    @Autowired
    MqttConfigSend.OutboundGateway outboundGateway;

    @Autowired
    BoardService boardService;

    @GetMapping("/hello")
    public String hello(){
//    mqtt publish test
        outboundGateway.sendToMqtt("test", "STM");
        return "Hello #1";
    }

//    redis cache test
    @GetMapping()
    public List<Board> boards(String size) {
        List<Board> boards = boardService.getBoards(size);
        return boards;
    }

    @GetMapping("count")
    public int count() {
        return BoardService.getDbCount();
    }
//    redis cache test
}

package com.ssafy.plant.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssafy.plant.config.oauth.OauthToken;
import com.ssafy.plant.domain.User;
import com.ssafy.plant.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/oauth")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/token") // 프론트에서 인가코드 받아오는 url
    public User getLogin(@RequestParam("code") String code) throws JsonProcessingException {
        System.out.println("인가코드받아왔어요");
        System.out.println(code);
        // 넘어온 인가코드로 accesstoken
        OauthToken oauthToken = userService.getAccessToken(code);

        // 발급 받은 accessToken으로 카카오 회원 정보 저장
        User user = userService.saveUser(oauthToken.getAccess_token());
        System.out.println(user);
        return user;
    }
}

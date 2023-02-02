package com.ssafy.plant.controller;

import com.ssafy.plant.config.oauth.OauthToken;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

    private fiinal UserService userService;

    public OauthToken getLogin(@RequestParam("code") String code) {

        OauthToken oauthToken = userService.getAccessToken(code);
        return oauthToken;
    }
}

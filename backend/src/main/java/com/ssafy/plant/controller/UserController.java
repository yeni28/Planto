package com.ssafy.plant.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssafy.plant.config.jwt.JwtProperties;
import com.ssafy.plant.config.oauth.OauthToken;
import com.ssafy.plant.domain.User;
import com.ssafy.plant.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/oauth/token") // 프론트에서 인가코드 받아오는 url
    public ResponseEntity<String> getLogin(@RequestParam("code") String code) throws JsonProcessingException {
//        System.out.println("인가코드받아왔어요");
//        System.out.println(code);
        // 넘어온 인가코드로 accesstoken
        OauthToken oauthToken = userService.getAccessToken(code);

        // 발급 받은 accessToken으로 카카오 회원 정보 저장
        String jwtToken = userService.saveUser(oauthToken.getAccess_token());

        HttpHeaders headers = new HttpHeaders();
        headers.add(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + jwtToken);
        System.out.println("=====================================");
        System.out.println(jwtToken);
        System.out.println(headers);
        System.out.println("=====================================");
        return ResponseEntity.ok().headers(headers).body("success");
    }

    @GetMapping("/me")
    public ResponseEntity<Object> getCurrentUser(HttpServletRequest request) {
        User user = userService.getUser(request);
        return ResponseEntity.ok().body(user);
    }
}

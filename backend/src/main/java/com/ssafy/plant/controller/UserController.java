package com.ssafy.plant.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssafy.plant.config.jwt.JwtProperties;
import com.ssafy.plant.config.oauth.OauthToken;
import com.ssafy.plant.domain.User;
import com.ssafy.plant.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;


    @GetMapping("/hello")
    public ResponseEntity<String> getHello(HttpServletRequest request) {
        System.out.println("*****************************");
        System.out.println(request.getAttribute("socialId"));
        System.out.println("*****************************");
        User userEntity = userService.getUser(request);
        System.out.println(userEntity);
        return ResponseEntity.status(HttpStatus.OK).body("success hello");
    }

    @GetMapping("/hi")
    public ResponseEntity<String> getHi(HttpServletRequest request) {
        System.out.println("*****************************");
        System.out.println(request.getAttribute("socialId"));
        System.out.println("*****************************");
        User userEntity = userService.getUser(request);
        System.out.println(userEntity);
        return ResponseEntity.status(HttpStatus.OK).body("success hello");
    }


    @GetMapping("/oauth/token") // 프론트에서 인가코드 받아오는 url
    public ResponseEntity<String> getLogin(@RequestParam("code") String code) throws JsonProcessingException {
        System.out.println("인가코드받아왔어요");
        System.out.println(code);
//        // 넘어온 인가코드로 accesstoken
        OauthToken oauthToken = userService.getAccessToken(code);
        // 발급 받은 accessToken으로 카카오 회원 정보 저장
        String jwtToken = userService.saveUser(oauthToken.getAccess_token());

        HttpHeaders headers = new HttpHeaders();
        headers.add(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + jwtToken);
        System.out.println("=====================================");
        System.out.println(headers);
        System.out.println(jwtToken);
        System.out.println("=====================================");
        return ResponseEntity.status(HttpStatus.OK).headers(headers).body("success");
    }

    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(HttpServletRequest request) {
        User user = userService.getUser(request);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }
}

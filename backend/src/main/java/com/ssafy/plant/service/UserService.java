package com.ssafy.plant.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.plant.config.oauth.OauthToken;
import com.ssafy.plant.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    @Value("${java.oauth.kakao.clientId}")
    private String clientId;

    @Value("${java.oauth.kakao.redirectUri}")
    private String redirectId;
    public OauthToken getAccessToken(String code) throws JsonProcessingException {
        RestTemplate rt = new RestTemplate();
<<<<<<< HEAD
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
=======

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

>>>>>>> aabf9581c2f0b6c194091171524aadb2540c63fd
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", clientId);
        params.add("redirect_uri", redirectId);
        params.add("code", code);
<<<<<<< HEAD
=======

>>>>>>> aabf9581c2f0b6c194091171524aadb2540c63fd
        // HttpHeader 와 HttpBody 정보를 하나의 객체에 담기
        HttpEntity<MultiValueMap<String, String>> TokenRequest =
                new HttpEntity<>(params, headers);

        ResponseEntity<String> accessTokenResponse = rt.exchange(
                "https://kauth.kakao.com/oauth/token",
                HttpMethod.POST,
                TokenRequest,
                String.class
        );
        ObjectMapper objectMapper = new ObjectMapper();
        OauthToken oauthToken = null;
        oauthToken = objectMapper.readValue(accessTokenResponse.getBody(), OauthToken.class);
        // .readValue(Json 데이터, 변환할 클래스) 메소드를 이용해 바디값 읽어오기
        return oauthToken;
    }

    public String saveUser(String access_token) {
        return null;
    }
}

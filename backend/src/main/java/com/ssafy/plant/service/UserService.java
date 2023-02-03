package com.ssafy.plant.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.plant.config.oauth.OauthToken;
import com.ssafy.plant.config.oauth.Profile.KakaoProfile;
import com.ssafy.plant.domain.User;
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

import java.nio.charset.StandardCharsets;

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
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", clientId);
        params.add("redirect_uri", redirectId);
        params.add("code", code);
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

    public User saveUser(String token) throws JsonProcessingException {
        KakaoProfile profile = searchProfile(token);

        String userId = "kakao" + profile.getId();
        String name = profile.properties.getNickname();
        String profileImageUrl = profile.kakao_account.getProfile().getProfile_image_url();

        User userEntity = userRepository.findByUserId(userId);  // db에 저장 되어 있는 유저인지 확인

        if (userEntity == null) {
            User user = User.builder()
                    .userId(userId)
                    .name(name)
                    .profileImageUrl(profileImageUrl)
                    .role("ROLE_USER")
                    .build();
            return userRepository.save(user);
        }
        return userEntity;
    }

    private KakaoProfile searchProfile(String token) throws JsonProcessingException {
        RestTemplate rt = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + token);
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        HttpEntity<MultiValueMap<String, String>> profileRequest = new HttpEntity<>(headers);
        ResponseEntity<String> profileResponse = rt.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                profileRequest,
                String.class
        );

        ObjectMapper objectMapper = new ObjectMapper();
        KakaoProfile kakaoProfile = objectMapper.readValue(profileResponse.getBody(), KakaoProfile.class);
        return kakaoProfile;

    }
}

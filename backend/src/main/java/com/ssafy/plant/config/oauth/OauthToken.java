package com.ssafy.plant.config.oauth;

import lombok.Data;

@Data
public class OauthToken {
    private String access_token;
    private int expires_in;
    private String token_type;
    private String scope;
    private String refresh_token;
    private int refresh_token_expires_in;
}

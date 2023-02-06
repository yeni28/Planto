package com.ssafy.plant.config.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.ssafy.plant.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {    // 한 요청당 반드시 한 번만 실행되는 필터

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // 요청 헤더의 Authorization 항목 값을 가져오기
        String jwtHeader = ((HttpServletRequest) request).getHeader(JwtProperties.HEADER_STRING);

        // 만약 jwtHeader가 null 이거나 Bearer로 시작하지 않으면 필터 다시 태움
        if (jwtHeader == null || !jwtHeader.startsWith(JwtProperties.TOKEN_PREFIX)) {
            filterChain.doFilter(request, response);
            return;
        }
        String token = jwtHeader.replace(JwtProperties.TOKEN_PREFIX, "");
        String userId = null;
        try {
            // token을 비밀 키로 복호화함, 클레임에 넣어두었던 id값을 가져옴
            userId = JWT.require(Algorithm.HMAC512(JwtProperties.SECRET))
                    .build()
                    .verify(token)
                    .getClaim("userId")
                    .asString();
        } catch (TokenExpiredException e) {
            e.printStackTrace();
            request.setAttribute(JwtProperties.HEADER_STRING, "토큰이 만료되었습니다.");
        } catch (JWTVerificationException e) {
            e.printStackTrace();
            request.setAttribute(JwtProperties.HEADER_STRING, "유효하지 않은 토큰입니다.");
        }
        request.setAttribute("userId", userId);
        filterChain.doFilter(request, response);    // filterChain에 request, response 값 넘김
    }
}

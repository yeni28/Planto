package com.ssafy.plant.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@ToString
@Entity
@Table(name = "weather")
public class WeatherEntity {

    @Id
    @Column(name = "weather_id", length = 30, unique = true, nullable = false)
    private String id;

    @Column(length = 20)
    private String baseDate;

    @Column(length = 20)
    private String fcstDate;

    @Column(length = 20)
    private String fcstTime;

    @Column(length = 10)
    private String PCP;

    @Column(length = 10)
    private String SNO;

    @Column(length = 10)
    private String TMP;

    @Column(length = 10)
    private String SKY;

    //빌더
    @Builder
    public WeatherEntity(String baseDate, String fcstDate, String fcstTime, String PCP, String SNO, String TMP, String SKY) {
        this.id = baseDate + fcstDate + fcstTime;
        this.baseDate = baseDate;
        this.fcstDate = fcstDate;
        this.fcstTime = fcstTime;
        this.PCP = PCP;
        this.SNO = SNO;
        this.TMP = TMP;
        this.SKY = SKY;
    }
}

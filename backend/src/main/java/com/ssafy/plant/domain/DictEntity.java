package com.ssafy.plant.domain;

import com.ssafy.plant.dto.DictDTO;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@NoArgsConstructor
@ToString
@Table(name = "plant_dict")
public class DictEntity {
    @Id
    @Column(name = "plant_dict_id", unique = true, nullable = false, columnDefinition = "INT UNSIGNED")
    private long plant_dict_id;

    @Column(name = "name", nullable = false, length = 200)
    private String name;

    @Column(name = "manage_level", length = 100)
    private String manage_level;

    @Column(name = "function_info", length = 5000)
    private String function_info;

    @Column(name = "temperature_max")
    private int temperature_max;

    @Column(name = "temperature_min")
    private int temperature_min;

    @Column(name = "light_max")
    private int light_max;

    @Column(name = "light_min")
    private int light_min;

    @Column(name = "humidity_max")
    private int humidity_max;

    @Column(name = "humidity_min")
    private int humidity_min;

    @Column(name = "manage_info", length = 5000)
    private String manage_info;

    @Column(name = "advice_info", length = 5000)
    private String advice_info;
    @Column(name = "image_path", length = 200)
    private String image_path;

    @Builder
    public DictEntity(long plant_dict_id, String name, String manage_level, String function_info, int temperature_max, int temperature_min,
                      int light_max, int light_min, int humidity_max, int humidity_min, String manage_info, String advice_info, String image_path) {
        this.plant_dict_id = plant_dict_id;
        this.name = name;
        this.manage_level = manage_level;
        this.function_info = function_info;
        this.temperature_max = temperature_max;
        this.temperature_min = temperature_min;
        this.light_max = light_max;
        this.light_min = light_min;
        this.humidity_max = humidity_max;
        this.humidity_min = humidity_min;
        this.manage_info = manage_info;
        this.advice_info = advice_info;
        this.image_path = image_path;
    }

    public DictDTO entityToDto(){
        return DictDTO.builder()
                .plant_dict_id(plant_dict_id)
                .name(name)
                .manage_level(manage_level)
                .function_info(function_info)
                .temperature_max(temperature_max)
                .temperature_min(temperature_min)
                .light_max(light_max)
                .light_min(light_min)
                .humidity_max(humidity_max)
                .humidity_min(humidity_min)
                .manage_info(manage_info)
                .advice_info(advice_info)
                .image_path(image_path)
                .build();
    }
}

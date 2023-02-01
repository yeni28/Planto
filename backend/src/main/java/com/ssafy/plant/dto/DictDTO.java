package com.ssafy.plant.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Id;


@Getter
@NoArgsConstructor
public class DictDTO {
    private long plant_dict_id;

    private String name;

    private String manage_level;

    private String function_info;

    private int temperature_max;

    private int temperature_min;

    private int light_max;

    private int light_min;

    private int humidity_max;

    private int humidity_min;

    private String manage_info;

    private String advice_info;
    private String image_path;

    @Builder
    public DictDTO(long plant_dict_id, String name, String manage_level, String function_info, int temperature_max, int temperature_min,
                   int light_max, int light_min, int humidity_max, int humidity_min, String manage_info, String advice_info, String image_path){
        this.plant_dict_id = plant_dict_id;
        this.name = name;
        this.manage_level = manage_level;
        this.temperature_max = temperature_max;
        this.temperature_min = temperature_min;
        this.light_max = light_max;
        this.light_min = light_min;
        this.humidity_max = humidity_max;
        this.humidity_min = humidity_min;
        this.function_info = function_info;
        this.manage_info = manage_info;
        this.advice_info = advice_info;
        this.image_path = image_path;
    }
}

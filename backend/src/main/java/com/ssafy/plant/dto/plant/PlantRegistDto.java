package com.ssafy.plant.dto.plant;

import com.ssafy.plant.domain.DictEntity;
import com.ssafy.plant.domain.Plant;
import com.ssafy.plant.domain.PotEntity;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@Data
public class PlantRegistDto {
    private MultipartFile file;
    private String name;
    private String createDate;
    private Long plantDictId;

    public Plant toEntity(String imagePath, PotEntity pot, DictEntity plantDict, Date date) {
        return Plant.builder()
                .name(name)
                .potEntity(pot)
                .createDate(date)
                .plantDict(plantDict)
                .imagePath(imagePath)
                .build();
    }
}

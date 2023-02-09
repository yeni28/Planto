package com.ssafy.plant.service;

import com.ssafy.plant.domain.DictEntity;
import com.ssafy.plant.domain.Plant;
import com.ssafy.plant.domain.PotEntity;
import com.ssafy.plant.dto.plant.PlantRegistDto;
import com.ssafy.plant.repository.DictRepository;
import com.ssafy.plant.repository.PlantRepository;
import com.ssafy.plant.repository.PotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PlantService {

    private final PlantRepository plantRepository;
    private final PotRepository potRepository;
    private final DictRepository dictRepository;

    @Value("${file.path}")
    private String uploadFolder;

    @Transactional
    public void 식물등록(PlantRegistDto plantRegistDto, Long potId) throws ParseException {
        UUID uuid = UUID.randomUUID();
        String imageFileName = uuid + "-" + plantRegistDto.getFile().getOriginalFilename();
        System.out.println("이미지 파일 이름" + imageFileName);
        Path imageFilePath = Paths.get(uploadFolder+imageFileName);

        //통신, I/O -> 예외가 발생할 수 있다.
        try {
            Files.write(imageFilePath, plantRegistDto.getFile().getBytes());
        } catch (Exception e) {
            e.printStackTrace();
        }
        // plant 테이블에 저장
        DictEntity dictEntity = dictRepository.findByPlantDictId(plantRegistDto.getPlantDictId());
        PotEntity potEntity = potRepository.findByPotId(potId);

        // 포맷터
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy년 MM월 dd일");
        // 문자열 -> Date
        Date date = formatter.parse(plantRegistDto.getCreateDate());

        Plant plant = plantRegistDto.toEntity(imageFileName, potEntity, dictEntity, date);
        System.out.println(plant);
        plantRepository.save(plant);
    }
}

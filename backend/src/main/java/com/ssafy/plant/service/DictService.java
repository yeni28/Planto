package com.ssafy.plant.service;


import com.ssafy.plant.domain.DictEntity;
import com.ssafy.plant.dto.DictDTO;
import com.ssafy.plant.repository.DictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DictService {

    @Autowired
    private DictApi dictApi;

    @Autowired
    private DictRepository dictRepository;

    public void getDictApi(){
//        page 가져오기
        for (int i = 1; i <= 22; i++) {
            dictApi.callApi(Integer.toString(i), "", "gardenList", "list");
        }
    }

    public List<DictDTO> getDictList() {
        List<DictEntity> dictEntities = dictRepository.findAll();

        List<DictDTO> dictDTOs = new ArrayList<>();

        for (DictEntity entity : dictEntities) {
            DictDTO dictDTO = entity.entityToDto();
            dictDTOs.add(dictDTO);
        }
        return dictDTOs;
    }

}

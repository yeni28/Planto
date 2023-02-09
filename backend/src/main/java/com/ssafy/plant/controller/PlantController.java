package com.ssafy.plant.controller;

import com.google.cloud.storage.Blob;
import com.google.cloud.storage.Bucket;
import com.google.firebase.cloud.StorageClient;
import com.ssafy.plant.dto.plant.PlantDto;
import com.ssafy.plant.dto.plant.PlantRegistDto;
import com.ssafy.plant.service.FireBaseService;
import com.ssafy.plant.service.PlantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.ParseException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/plant")
public class PlantController {

    private final FireBaseService fireBaseService;
    private final PlantService plantService;

    @PostMapping("/{potId}")
    public ResponseEntity<String> createPlant(PlantRegistDto dto, @PathVariable Long potId) throws ParseException, IOException {
        System.out.println(dto);
        plantService.식물등록(dto, potId);
        return ResponseEntity.status(HttpStatus.CREATED).body("식물등록");
    }

    @PutMapping("/{plantId}")
    public ResponseEntity<String> updatePlant(@PathVariable Long plantId,
                                              @RequestBody PlantDto dto) {
        return null;
    }

    @DeleteMapping("/{plantId}")
    public ResponseEntity<String> updatePlant(@PathVariable Long plantId) {

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }

//    @DeleteMapping("/files")
//    public ResponseEntity<String> deleteFile(String name) throws IOException {
//        Bucket bucket = StorageClient.getInstance().bucket();
//
//        if (StringUtils.isEmpty(name)) {
//            throw new IOException("invalid file name");
//        }
//
//        Blob blob = bucket.get(name);
//
//        if (blob == null) {
//            throw new IOException("file not found");
//        }
//
//        blob.delete();
//        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("삭제");
//    }
}

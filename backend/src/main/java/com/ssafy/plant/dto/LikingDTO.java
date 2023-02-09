package com.ssafy.plant.dto;

import lombok.*;

@Getter
@NoArgsConstructor
@ToString
public class LikingDTO {
    private int serialNo;
    private int liking;

    @Builder
    public LikingDTO(int serialNo, int liking) {
        this.serialNo = serialNo;
        this.liking = liking;
    }
}

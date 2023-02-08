package com.ssafy.plant.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Plant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "plant_id")
    private Long plantId;

//    @ManyToOne(cascade = CascadeType.REMOVE)
//    @JoinColumn(name = "user_id")
//    private User user;

    @OneToOne
    @JoinColumn(name="plant_dict_plant_dict_id")
    private DictEntity plantDict;

    private String name;

    @Column(name="image_path")
    private String imagePath;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name="create_date")
    private Date createDate;

    private int temperature;

    private int humidity;

    private int sun;

    @Column(name = "water_level")
    private int waterLevel;

    private int attack;

    private int hug;

    private int liking;

}


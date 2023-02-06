package com.ssafy.plant.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

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

    @Column(name="create_date")
    private LocalDateTime createDate;

    private int temperature;

    private int humidity;

    private int sun;

    @Column(name = "water_level")
    private int waterLevel;

    private int attack;

    private int hug;

    private int liking;

    @PrePersist
    public void createDate() {
        this.createDate = LocalDateTime.now();
    }

}


package com.ssafy.plant.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
@ToString
@Table(name = "pot")
public class PotEntity {
    @Id
    @Column(name = "pot_id", unique = true, nullable = false, columnDefinition = "INT UNSIGNED")
    private long potId;

    @OneToOne
    @JoinColumn(name = "plant_id")
    private Plant plant;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public PotEntity(long potId, Plant plant, User user){
        this.potId = potId;
        this.plant = plant;
        this.user = user;
    }
}

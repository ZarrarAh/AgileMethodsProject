package com.kleda.dashboard.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "predictions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Prediction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String metric;

    @Column(nullable = false)
    private Double currentValue;

    @Column(nullable = false)
    private Double predictedValue;

    @Column(nullable = false)
    private Double change;    // Percentage change
}
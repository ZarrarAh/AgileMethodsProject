package com.kleda.dashboard.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "heatmap")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Heatmap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String day;       // 'Mandag', 'Tirsdag', etc.

    @Column(nullable = false)
    private String dayShort;  // 'M', 'T', 'O', etc.

    @Column(nullable = false)
    private Double activity;  // 0.0 to 1.0
}
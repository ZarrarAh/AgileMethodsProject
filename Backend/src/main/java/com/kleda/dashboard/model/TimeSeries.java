package com.kleda.dashboard.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "time_series")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TimeSeries {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String date;      // 'Man', 'Tir', 'Ons', etc.

    @Column(nullable = false)
    private Integer views;

    @Column(nullable = false)
    private Integer sales;
}
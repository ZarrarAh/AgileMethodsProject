package com.kleda.dashboard.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "metrics")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Metric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String metricId;  // 'views', 'sales', 'revenue', 'conversion'

    @Column(nullable = false)
    private String label;     // 'Visninger', 'Salg', etc.

    @Column(nullable = false)
    private Double value;

    private Double change;    // Percentage change
    private String icon;      // Emoji icon
    private String unit;      // 'number', 'currency', 'percentage'
}

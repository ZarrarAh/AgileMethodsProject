package com.kleda.dashboard.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer rank;

    @Column(nullable = false)
    private Integer views;

    @Column(nullable = false)
    private Integer sales;

    @Column(nullable = false)
    private Double conversionRate;

    private String category;
}

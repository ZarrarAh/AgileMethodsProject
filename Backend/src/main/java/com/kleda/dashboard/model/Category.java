package com.kleda.dashboard.model;

import jakarta.persistence.*;

@Entity
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(name = "category_value", nullable = false)  // ← ENDRE HER!
    private Integer value;

    private String color;

    // Constructors
    public Category() {
    }

    public Category(Long id, String name, Integer value, String color) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.color = color;
    }

    // Getters
    public Long getId() { return id; }
    public String getName() { return name; }
    public Integer getValue() { return value; }
    public String getColor() { return color; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setValue(Integer value) { this.value = value; }
    public void setColor(String color) { this.color = color; }
}
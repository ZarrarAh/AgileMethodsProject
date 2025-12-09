package com.kleda.dashboard.model;

import jakarta.persistence.*;

@Entity
@Table(name = "heatmap")
public class Heatmap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "day_name", nullable = false)
    private String day;

    @Column(nullable = false)
    private String dayShort;

    @Column(nullable = false)
    private Double activity;

    // Constructors
    public Heatmap() {
    }

    public Heatmap(Long id, String day, String dayShort, Double activity) {
        this.id = id;
        this.day = day;
        this.dayShort = dayShort;
        this.activity = activity;
    }

    // Getters
    public Long getId() { return id; }
    public String getDay() { return day; }
    public String getDayShort() { return dayShort; }
    public Double getActivity() { return activity; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setDay(String day) { this.day = day; }
    public void setDayShort(String dayShort) { this.dayShort = dayShort; }
    public void setActivity(Double activity) { this.activity = activity; }
}
package com.kleda.dashboard.model;

import jakarta.persistence.*;

@Entity
@Table(name = "predictions")
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

    @Column(name = "prediction_change", nullable = false)  // ← ENDRE HER!
    private Double change;

    // Constructors
    public Prediction() {
    }

    public Prediction(Long id, String metric, Double currentValue, Double predictedValue, Double change) {
        this.id = id;
        this.metric = metric;
        this.currentValue = currentValue;
        this.predictedValue = predictedValue;
        this.change = change;
    }

    // Getters
    public Long getId() { return id; }
    public String getMetric() { return metric; }
    public Double getCurrentValue() { return currentValue; }
    public Double getPredictedValue() { return predictedValue; }
    public Double getChange() { return change; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setMetric(String metric) { this.metric = metric; }
    public void setCurrentValue(Double currentValue) { this.currentValue = currentValue; }
    public void setPredictedValue(Double predictedValue) { this.predictedValue = predictedValue; }
    public void setChange(Double change) { this.change = change; }
}
package com.kleda.dashboard.model;

import jakarta.persistence.*;

@Entity
@Table(name = "metrics")
public class Metric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String metricId;

    @Column(nullable = false)
    private String label;

    @Column(name = "metric_value", nullable = false)  // ← ENDRE HER!
    private Double value;

    @Column(name = "metric_change")  // ← ENDRE HER!
    private Double change;

    private String icon;

    private String unit;

    // Constructors
    public Metric() {
    }

    public Metric(Long id, String metricId, String label, Double value, Double change, String icon, String unit) {
        this.id = id;
        this.metricId = metricId;
        this.label = label;
        this.value = value;
        this.change = change;
        this.icon = icon;
        this.unit = unit;
    }

    // Getters
    public Long getId() { return id; }
    public String getMetricId() { return metricId; }
    public String getLabel() { return label; }
    public Double getValue() { return value; }
    public Double getChange() { return change; }
    public String getIcon() { return icon; }
    public String getUnit() { return unit; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setMetricId(String metricId) { this.metricId = metricId; }
    public void setLabel(String label) { this.label = label; }
    public void setValue(Double value) { this.value = value; }
    public void setChange(Double change) { this.change = change; }
    public void setIcon(String icon) { this.icon = icon; }
    public void setUnit(String unit) { this.unit = unit; }
}

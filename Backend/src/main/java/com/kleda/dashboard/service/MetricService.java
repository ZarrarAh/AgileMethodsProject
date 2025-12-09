package com.kleda.dashboard.service;

import com.kleda.dashboard.model.Metric;
import com.kleda.dashboard.repository.MetricRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MetricService {

    private final MetricRepository metricRepository;

    /**
     * Get all metrics
     */
    public List<Metric> getAllMetrics() {
        return metricRepository.findAll();
    }

    /**
     * Get metric by ID (metricId like 'views', 'sales')
     */
    public Metric getMetricById(String metricId) {
        return metricRepository.findByMetricId(metricId)
                .orElseThrow(() -> new RuntimeException("Metric not found: " + metricId));
    }

    /**
     * Update metric value (for demo/testing)
     */
    public Metric updateMetric(String metricId, Double newValue) {
        Metric metric = getMetricById(metricId);

        // Calculate change percentage
        Double oldValue = metric.getValue();
        Double change = ((newValue - oldValue) / oldValue) * 100;

        metric.setValue(newValue);
        metric.setChange(change);

        return metricRepository.save(metric);
    }
}
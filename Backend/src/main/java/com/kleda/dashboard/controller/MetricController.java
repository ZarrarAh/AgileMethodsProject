package com.kleda.dashboard.controller;

import com.kleda.dashboard.model.Metric;
import com.kleda.dashboard.service.MetricService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/metrics")
@RequiredArgsConstructor
public class MetricController {

    private final MetricService metricService;

    /**
     * GET /api/metrics
     * Get all metrics
     */
    @GetMapping
    public ResponseEntity<List<Metric>> getAllMetrics() {
        return ResponseEntity.ok(metricService.getAllMetrics());
    }

    /**
     * GET /api/metrics/{metricId}
     * Get specific metric
     */
    @GetMapping("/{metricId}")
    public ResponseEntity<Metric> getMetricById(@PathVariable String metricId) {
        return ResponseEntity.ok(metricService.getMetricById(metricId));
    }
}

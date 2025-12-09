package com.kleda.dashboard.service;

import com.kleda.dashboard.model.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final MetricService metricService;
    private final TimeSeriesService timeSeriesService;
    private final ProductService productService;
    private final CategoryService categoryService;
    private final InsightService insightService;
    private final PredictionService predictionService;
    private final HeatmapService heatmapService;

    /**
     * Get complete dashboard data (all data in one call)
     */
    public Map<String, Object> getDashboardData() {
        Map<String, Object> dashboard = new HashMap<>();

        // Collect all data
        dashboard.put("metrics", metricService.getAllMetrics());
        dashboard.put("timeSeriesData", timeSeriesService.getTimeSeries());
        dashboard.put("topProducts", productService.getTopProducts(5));
        dashboard.put("categoryDistribution", categoryService.getCategoryDistribution());
        dashboard.put("insights", insightService.getAllInsights());
        dashboard.put("predictions", predictionService.getAllPredictions());
        dashboard.put("heatmapData", heatmapService.getHeatmapData());

        // Add timestamp
        dashboard.put("lastUpdated", LocalDateTime.now()
                .format(DateTimeFormatter.ISO_DATE_TIME));

        return dashboard;
    }
}
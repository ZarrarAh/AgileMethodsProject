package com.kleda.dashboard.controller;

import com.kleda.dashboard.model.TimeSeries;
import com.kleda.dashboard.service.TimeSeriesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/time-series")
@RequiredArgsConstructor
public class TimeSeriesController {

    private final TimeSeriesService timeSeriesService;

    /**
     * GET /api/time-series
     * Get time series data
     */
    @GetMapping
    public ResponseEntity<List<TimeSeries>> getTimeSeries(
            @RequestParam(defaultValue = "7") int days
    ) {
        return ResponseEntity.ok(timeSeriesService.getTimeSeriesForDays(days));
    }
}
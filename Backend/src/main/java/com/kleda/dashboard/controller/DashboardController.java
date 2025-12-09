package com.kleda.dashboard.controller;

import com.kleda.dashboard.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    /**
     * GET /api/dashboard
     * Get complete dashboard data (all data in one call)
     */
    @GetMapping
    public ResponseEntity<Map<String, Object>> getDashboardData() {
        return ResponseEntity.ok(dashboardService.getDashboardData());
    }
}
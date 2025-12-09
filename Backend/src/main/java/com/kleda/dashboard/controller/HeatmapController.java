package com.kleda.dashboard.controller;

import com.kleda.dashboard.model.Heatmap;
import com.kleda.dashboard.service.HeatmapService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/heatmap")
@RequiredArgsConstructor
public class HeatmapController {

    private final HeatmapService heatmapService;

    /**
     * GET /api/heatmap
     * Get heatmap data
     */
    @GetMapping
    public ResponseEntity<List<Heatmap>> getHeatmapData() {
        return ResponseEntity.ok(heatmapService.getHeatmapData());
    }
}
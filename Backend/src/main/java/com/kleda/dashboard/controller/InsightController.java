package com.kleda.dashboard.controller;

import com.kleda.dashboard.model.Insight;
import com.kleda.dashboard.service.InsightService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/insights")
@RequiredArgsConstructor
public class InsightController {

    private final InsightService insightService;

    /**
     * GET /api/insights
     * Get all insights (STATISKE - ingen AI!)
     */
    @GetMapping
    public ResponseEntity<List<Insight>> getAllInsights() {
        return ResponseEntity.ok(insightService.getAllInsights());
    }

    /**
     * GET /api/insights/priority
     * Get insights by priority
     */
    @GetMapping("/priority")
    public ResponseEntity<List<Insight>> getInsightsByPriority(
            @RequestParam String priority
    ) {
        return ResponseEntity.ok(insightService.getInsightsByPriority(priority));
    }

    /**
     * GET /api/insights/{id}
     * Get insight by ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<Insight> getInsightById(@PathVariable Long id) {
        return ResponseEntity.ok(insightService.getInsightById(id));
    }
}
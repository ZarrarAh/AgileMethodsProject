package com.kleda.dashboard.controller;

import com.kleda.dashboard.model.Prediction;
import com.kleda.dashboard.service.PredictionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/predictions")
@RequiredArgsConstructor
public class PredictionController {

    private final PredictionService predictionService;

    /**
     * GET /api/predictions
     * Get all predictions (STATISKE - ingen AI!)
     */
    @GetMapping
    public ResponseEntity<List<Prediction>> getAllPredictions() {
        return ResponseEntity.ok(predictionService.getAllPredictions());
    }
}
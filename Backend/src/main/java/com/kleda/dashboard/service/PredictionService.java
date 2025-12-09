package com.kleda.dashboard.service;

import com.kleda.dashboard.model.Prediction;
import com.kleda.dashboard.repository.PredictionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PredictionService {

    private final PredictionRepository predictionRepository;

    /**
     * Get all predictions (STATISKE - fra database)
     * INGEN AI GENERERING! Bare hardkodede prediksjoner.
     */
    public List<Prediction> getAllPredictions() {
        return predictionRepository.findAll();
    }
}
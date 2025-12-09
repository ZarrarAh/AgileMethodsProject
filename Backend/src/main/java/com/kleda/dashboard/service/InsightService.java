package com.kleda.dashboard.service;

import com.kleda.dashboard.model.Insight;
import com.kleda.dashboard.repository.InsightRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InsightService {

    private final InsightRepository insightRepository;

    /**
     * Get all insights (STATISKE - fra database)
     * INGEN AI GENERERING!
     */
    public List<Insight> getAllInsights() {
        return insightRepository.findAll();
    }

    /**
     * Get insights by priority
     */
    public List<Insight> getInsightsByPriority(String priority) {
        return insightRepository.findByPriority(priority);
    }

    /**
     * Get insight by ID
     */
    public Insight getInsightById(Long id) {
        return insightRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Insight not found: " + id));
    }
}
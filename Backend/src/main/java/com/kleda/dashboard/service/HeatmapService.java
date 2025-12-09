package com.kleda.dashboard.service;

import com.kleda.dashboard.model.Heatmap;
import com.kleda.dashboard.repository.HeatmapRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HeatmapService {

    private final HeatmapRepository heatmapRepository;

    /**
     * Get heatmap data (weekly activity)
     */
    public List<Heatmap> getHeatmapData() {
        return heatmapRepository.findAll();
    }
}
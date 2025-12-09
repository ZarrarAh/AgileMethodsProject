package com.kleda.dashboard.repository;

import com.kleda.dashboard.model.Heatmap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HeatmapRepository extends JpaRepository<Heatmap, Long> {
}
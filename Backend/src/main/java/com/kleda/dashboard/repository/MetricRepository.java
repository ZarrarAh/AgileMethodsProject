package com.kleda.dashboard.repository;

import com.kleda.dashboard.model.Metric;
import com.kleda.dashboard.model.TimeSeries;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MetricRepository extends JpaRepository<Metric, Long> {
    Optional<Metric> findByMetricId(String metricId);
}
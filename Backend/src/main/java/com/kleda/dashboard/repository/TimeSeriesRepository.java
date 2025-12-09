package com.kleda.dashboard.repository;

import com.kleda.dashboard.model.TimeSeries;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeSeriesRepository extends JpaRepository<TimeSeries, Long> {
}
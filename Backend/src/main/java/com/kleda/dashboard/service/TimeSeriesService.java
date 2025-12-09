package com.kleda.dashboard.service;

import com.kleda.dashboard.model.TimeSeries;
import com.kleda.dashboard.repository.TimeSeriesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TimeSeriesService {

    private final TimeSeriesRepository timeSeriesRepository;

    /**
     * Get all time series data (7 days)
     */
    public List<TimeSeries> getTimeSeries() {
        return timeSeriesRepository.findAll();
    }

    /**
     * Get time series for specific number of days
     */
    public List<TimeSeries> getTimeSeriesForDays(int days) {
        List<TimeSeries> allData = timeSeriesRepository.findAll();
        return allData.size() <= days ? allData : allData.subList(0, days);
    }
}

package com.kleda.dashboard.repository;

import com.kleda.dashboard.model.Insight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InsightRepository extends JpaRepository<Insight, Long> {
    List<Insight> findByPriority(String priority);
}
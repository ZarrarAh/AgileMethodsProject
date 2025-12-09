package com.kleda.dashboard.service;

import com.kleda.dashboard.model.Category;
import com.kleda.dashboard.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    /**
     * Get category distribution
     */
    public List<Category> getCategoryDistribution() {
        return categoryRepository.findAll();
    }
}
package com.kleda.dashboard.controller;

import com.kleda.dashboard.model.Category;
import com.kleda.dashboard.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    /**
     * GET /api/categories/distribution
     * Get category distribution
     */
    @GetMapping("/distribution")
    public ResponseEntity<List<Category>> getCategoryDistribution() {
        return ResponseEntity.ok(categoryService.getCategoryDistribution());
    }
}
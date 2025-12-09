package com.kleda.dashboard.controller;

import com.kleda.dashboard.model.Product;
import com.kleda.dashboard.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    /**
     * GET /api/products
     * Get all products
     */
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    /**
     * GET /api/products/top
     * Get top N products
     */
    @GetMapping("/top")
    public ResponseEntity<List<Product>> getTopProducts(
            @RequestParam(defaultValue = "5") int limit
    ) {
        return ResponseEntity.ok(productService.getTopProducts(limit));
    }

    /**
     * GET /api/products/{id}
     * Get product by ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }
}

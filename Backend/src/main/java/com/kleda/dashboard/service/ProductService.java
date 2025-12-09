package com.kleda.dashboard.service;

import com.kleda.dashboard.model.Product;
import com.kleda.dashboard.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    /**
     * Get all products
     */
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    /**
     * Get top N products (sorted by rank)
     */
    public List<Product> getTopProducts(int limit) {
        List<Product> allProducts = productRepository.findTop5ByOrderByRankAsc();
        return allProducts.size() <= limit ? allProducts : allProducts.subList(0, limit);
    }

    /**
     * Get product by ID
     */
    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found: " + id));
    }
}
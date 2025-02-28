package com.sweets.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sweets.entity.Product;
import com.sweets.repo.ProductRepo;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {
    @Autowired
    private ProductRepo db;

    @GetMapping
    public List<Product> getAllProducts() {
        return db.findAll();
    }

    @PostMapping
    public String addNewProduct(@RequestBody Product data) {
        db.save(data);
        return "Successfully added " + data.getProductname();
    }
}

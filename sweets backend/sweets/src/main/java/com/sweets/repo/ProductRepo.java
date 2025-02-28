package com.sweets.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sweets.entity.Product;

public interface ProductRepo extends JpaRepository<Product, String>{

}

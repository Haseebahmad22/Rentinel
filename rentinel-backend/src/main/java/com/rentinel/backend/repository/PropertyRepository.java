package com.rentinel.backend.repository;

import com.rentinel.backend.model.Property;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Integer> {
    // You can add custom queries here if needed
}


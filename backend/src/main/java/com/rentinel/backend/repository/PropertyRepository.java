package com.rentinel.backend.repository;

import com.rentinel.backend.model.Property;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.List;
@Repository
public interface PropertyRepository extends JpaRepository<Property, Integer> {
    Optional<Property> findById(Integer propertyID);
    List<Property> findByOwnerName(String ownerName);
    // You can add custom queries here if needed
}


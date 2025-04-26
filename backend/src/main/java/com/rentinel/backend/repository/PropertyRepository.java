package com.rentinel.backend.repository;

import com.rentinel.backend.model.Property;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Integer> {
    Optional<Property> findById(Integer propertyID);

    List<Property> findByOwnerName(String ownerName);

    @Query("SELECT AVG(p.fixedRent) FROM Property p")
    Double getAverageRent();

    @Query("SELECT (COUNT(pa.propertyID) * 100.0) / COUNT(p.propertyID) FROM Property p LEFT JOIN PropertyAssignment pa ON pa.propertyID = p.propertyID")
    Double getOccupancyRate();
}

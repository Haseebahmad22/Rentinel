package com.rentinel.backend.repository;

import com.rentinel.backend.model.PropertyAssignment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PropertyAssignmentRepository extends JpaRepository<PropertyAssignment, Integer> {

    // Custom query to find property assignments by tenant ID (tenantName)
    List<PropertyAssignment> findByTenantID(Integer ID);
}

package com.rentinel.backend.repository;

import com.rentinel.backend.model.RentAssignment;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface RentAssignmentRepository extends JpaRepository<RentAssignment, Integer> {
    List<RentAssignment> findByPropertyId(Integer propertyId);

}

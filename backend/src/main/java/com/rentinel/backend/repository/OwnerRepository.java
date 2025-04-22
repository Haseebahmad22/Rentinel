package com.rentinel.backend.repository;

import com.rentinel.backend.model.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnerRepository extends JpaRepository<Owner, Integer> {
    // You can add custom queries here if needed
}

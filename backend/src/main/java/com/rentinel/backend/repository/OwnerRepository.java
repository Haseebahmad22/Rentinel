package com.rentinel.backend.repository;

import com.rentinel.backend.model.Owner;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnerRepository extends JpaRepository<Owner, Integer> {
        Optional<Owner> findById(Integer ID);
    // You can add custom queries here if needed
}

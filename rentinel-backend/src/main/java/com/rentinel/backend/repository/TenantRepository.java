package com.rentinel.backend.repository;

import com.rentinel.backend.model.Tenant;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TenantRepository extends JpaRepository<Tenant, Integer> {
    // You can add custom queries here if needed
}

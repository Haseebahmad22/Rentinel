package com.rentinel.backend.repository;

import com.rentinel.backend.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

    // Find an admin by username
    Admin findByUserName(String userName);

    // Find an admin by CNIC
    Admin findByCNIC(String CNIC);
}

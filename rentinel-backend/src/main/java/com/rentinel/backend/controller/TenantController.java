package com.rentinel.backend.controller;

import com.rentinel.backend.model.Tenant;
import com.rentinel.backend.repository.TenantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tenants")
public class TenantController {

    @Autowired
    private TenantRepository tenantRepository;

    // GET /api/owners
    @GetMapping
    public List<Tenant> getAllOwners() {
        return tenantRepository.findAll();
    }
}

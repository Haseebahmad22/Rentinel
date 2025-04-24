package com.rentinel.backend.controller;

import com.rentinel.backend.model.PropertyAssignment;
import com.rentinel.backend.repository.PropertyAssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")

@RequestMapping("/propertyAssignments")
public class PropertyAssignmentController {

    @Autowired
    private PropertyAssignmentRepository propertyAssignmentRepository;

    // Endpoint to get property assignments by tenant ID
    @GetMapping("/tenant/{tenantId}")
    public List<PropertyAssignment> getPropertyAssignmentsByTenantId(@PathVariable Integer tenantId) {
        return propertyAssignmentRepository.findByTenantID(tenantId);
    }
}

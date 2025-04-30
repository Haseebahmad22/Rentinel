package com.rentinel.backend.controller;

import com.rentinel.backend.model.Property;
import com.rentinel.backend.model.PropertyAssignment;
import com.rentinel.backend.repository.PropertyAssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Map;
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
    @GetMapping("/property/{propertyID}")
    public List<PropertyAssignment> getPropertyAssignmentsByPropertyId(@PathVariable Integer propertyID) {
        return propertyAssignmentRepository.findByPropertyID(propertyID);
    }

    @DeleteMapping("/property/{propertyID}")
    public void deletePropertyAssignmentsByPropertyID(@PathVariable Integer propertyID) {
        propertyAssignmentRepository.deleteByPropertyID(propertyID);
    }

    @PutMapping("/updateTenant/{assignmentID}")
    public ResponseEntity<String> updateTenantForProperty(
        @PathVariable Integer assignmentID,
        @RequestBody Map<String, Integer> requestBody) {  // Simplified to only accept tenantID
        
        if (requestBody == null || !requestBody.containsKey("tenantID")) {
            return ResponseEntity.badRequest().body("Request must contain tenantID");
        }
    
        Optional<PropertyAssignment> existingAssignmentOpt = propertyAssignmentRepository.findById(assignmentID);
        
        if (existingAssignmentOpt.isPresent()) {
            PropertyAssignment existingAssignment = existingAssignmentOpt.get();
            existingAssignment.setTenantID(requestBody.get("tenantID"));
            propertyAssignmentRepository.save(existingAssignment);
            return ResponseEntity.ok("Tenant ID updated successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Property assignment not found.");
        }
    }
}

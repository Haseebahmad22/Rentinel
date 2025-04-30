package com.rentinel.backend.controller;

import com.rentinel.backend.model.PropertyAssignment;
import com.rentinel.backend.repository.PropertyAssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
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

    @DeleteMapping("/property/{propertyID}")
    public void deletePropertyAssignmentsByPropertyID(@PathVariable Integer propertyID) {
        propertyAssignmentRepository.deleteByPropertyID(propertyID);
    }

    // create new propertyAssignment at /propertyAssignments
    @PostMapping
    public ResponseEntity<PropertyAssignment> createPropertyAssignment(
            @RequestBody PropertyAssignment newPropertyAssignment) {
        try {
            System.out.println(newPropertyAssignment);
            newPropertyAssignment.setAssignmentDate(LocalDate.now());
            PropertyAssignment savedPropertyAssignment = propertyAssignmentRepository.save(newPropertyAssignment);
            return new ResponseEntity<>(savedPropertyAssignment, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

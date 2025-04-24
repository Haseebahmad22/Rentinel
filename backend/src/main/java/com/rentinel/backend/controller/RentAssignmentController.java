package com.rentinel.backend.controller;

import com.rentinel.backend.model.RentAssignment;
import com.rentinel.backend.repository.RentAssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/rentAssignments")
public class RentAssignmentController {

    @Autowired
    private RentAssignmentRepository repository;

    @GetMapping
    public List<RentAssignment> getAll() {
        return repository.findAll();
    }

    @GetMapping("/property/{propertyId}")
    public List<RentAssignment> getByPropertyId(@PathVariable Integer propertyId) {
        return repository.findByPropertyID(propertyId);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RentAssignment> getById(@PathVariable Integer id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public RentAssignment create(@RequestBody RentAssignment rentAssignment) {
        return repository.save(rentAssignment);
    }

  

}

package com.rentinel.backend.controller;

import com.rentinel.backend.model.Owner;
import com.rentinel.backend.model.Property;
import com.rentinel.backend.repository.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")

@RestController
@RequestMapping("/owners")
public class OwnerController {

    @Autowired
    private OwnerRepository ownerRepository;

    // GET /api/owners
    @GetMapping
    public List<Owner> getAllOwners() {
        return ownerRepository.findAll();
    }

        // GET /properties/{propertyID} - Fetch a single property by its propertyID
    @GetMapping("/{ID}")
    public Owner getPropertyById(@PathVariable Integer ID) {
        Optional<Owner> owner = ownerRepository.findById(ID);
        if (owner.isPresent()) {
            return owner.get();
        } else {
            throw new RuntimeException("Property not found with id " + ID);
        }
    }
    // DELETE /owners/{id}
    @DeleteMapping("/{id}")
    public void deleteOwner(@PathVariable Integer id) {
        ownerRepository.deleteById(id);
    }
}

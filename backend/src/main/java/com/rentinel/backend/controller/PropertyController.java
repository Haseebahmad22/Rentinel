
package com.rentinel.backend.controller;

import com.rentinel.backend.model.Property;
import com.rentinel.backend.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/properties")
public class PropertyController {

    @Autowired
    private PropertyRepository propertyRepository;

    // GET /api/owners
    @GetMapping
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }
     // DELETE /properties/{id}
     @DeleteMapping("/{id}")
     public void deleteProperty(@PathVariable Integer id) {
         propertyRepository.deleteById(id);
     }
}


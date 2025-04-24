package com.rentinel.backend.controller;

import com.rentinel.backend.model.Property;
import com.rentinel.backend.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/properties")
public class PropertyController {

    @Autowired
    private PropertyRepository propertyRepository;

    // GET /properties
    @GetMapping
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    // GET /properties/{propertyID} - Fetch a single property by its propertyID
    @GetMapping("/{propertyID}")
    public Property getPropertyById(@PathVariable Integer propertyID) {
        Optional<Property> property = propertyRepository.findById(propertyID);
        if (property.isPresent()) {
            return property.get();
        } else {
            throw new RuntimeException("Property not found with id " + propertyID);
        }
    }

    // DELETE /properties/{propertyID}
    @DeleteMapping("/{propertyID}")
    public void deleteProperty(@PathVariable Integer propertyID) {
        propertyRepository.deleteById(propertyID);
    }

    // PUT /properties/{propertyID}
    @PutMapping("/{propertyID}")
    public Property updateProperty(@PathVariable Integer propertyID, @RequestBody Property updatedProperty) {
        return propertyRepository.findById(propertyID)
                .map(property -> {
                    property.setPropertyName(updatedProperty.getPropertyName());
                    property.setLocation(updatedProperty.getLocation());
                    property.setFixedRent(updatedProperty.getFixedRent());
                    property.setOwnerName(updatedProperty.getOwnerName());
                    property.setTenantName(updatedProperty.getTenantName());
                    property.setNumOfBedRooms(updatedProperty.getNumOfBedRooms());
                    property.setNumOfRooms(updatedProperty.getNumOfRooms());
                    property.setNumOfBaths(updatedProperty.getNumOfBaths());
                    return propertyRepository.save(property);
                })
                .orElseThrow(() -> new RuntimeException("Property not found with id " + propertyID));
    }

    
    // GET /properties/owner/{ownerID} - Fetch properties by ownerID
    @GetMapping("/owner/{ownerName}")
    public List<Property> getPropertiesByOwnerName(@PathVariable String ownerName) {
        return propertyRepository.findByOwnerName(ownerName);
    }
}

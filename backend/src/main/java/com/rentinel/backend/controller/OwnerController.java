package com.rentinel.backend.controller;

import com.rentinel.backend.model.Owner;
import com.rentinel.backend.model.UserRegistrationStats;
import com.rentinel.backend.repository.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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

    // PUT /tenants/{id} - Update tenant details
    @PutMapping("/{id}")
    public Owner updateOwner(@PathVariable Integer id, @RequestBody Owner ownerDetails) {
        Optional<Owner> owner = ownerRepository.findById(id);

        if (!owner.isPresent()) {
            throw new RuntimeException("Owner not found with ID " + id);
        }

        Owner existingOwner = owner.get();

        // Update the tenant details, skipping password update for security reasons
        existingOwner.setFullName(ownerDetails.getFullName());
        existingOwner.setUserName(ownerDetails.getUserName());
        existingOwner.setEmail(ownerDetails.getEmail());
        existingOwner.setCNIC(ownerDetails.getCNIC());
        return ownerRepository.save(existingOwner);
    }

    @GetMapping("/count")
    public long getOwnerCount() {
        return ownerRepository.count();
    }
    @GetMapping("/userRegistrations")
    public List<UserRegistrationStats> getUserRegistrationStats() {
        try {
            List<Object[]> results = ownerRepository.getUserRegistrationStats();
            List<UserRegistrationStats> statsList = new ArrayList<>();
            
            // Debugging: Print the results first to check the data structure
            System.out.println("Query Results: " + results);
    
            // Now process the results
            for (Object[] result : results) {
                if (result != null && result.length == 2) {
                    String month = (String) result[0];
                    Integer userCount = (Integer) result[1];
                    statsList.add(new UserRegistrationStats(month, userCount));
                }
            }
            return statsList;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error fetching user registration stats", e);
        }
    }
    

    @GetMapping("/test")
public String testQuery() {
    try {
        List<Object[]> results = ownerRepository.getUserRegistrationStats();
        return "Query executed successfully: " + results.size() + " records found.";
    } catch (Exception e) {
        e.printStackTrace();
        return "Error: " + e.getMessage();
    }
}


}

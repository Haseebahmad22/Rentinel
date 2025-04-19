package com.rentinel.backend.controller;

import com.rentinel.backend.model.Owner;
import com.rentinel.backend.repository.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
}

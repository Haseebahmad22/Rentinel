
package com.rentinel.backend.controller;

import com.rentinel.backend.model.Payment;
import com.rentinel.backend.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepository;

    // GET /api/owners
    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }
}

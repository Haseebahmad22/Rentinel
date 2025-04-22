
package com.rentinel.backend.controller;

import com.rentinel.backend.dto.MonthlyPaymentSummary;
import com.rentinel.backend.model.Payment;
import com.rentinel.backend.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
    @GetMapping("/monthlysummary")
    public List<MonthlyPaymentSummary> getMonthlySummary() {
        List<Object[]> raw = paymentRepository.getMonthlySummaryRaw();
        List<MonthlyPaymentSummary> result = new ArrayList<>();
        for (Object[] row : raw) {
            if (row[0] != null && row[1] != null) {
                result.add(new MonthlyPaymentSummary((String) row[0], ((Number) row[1]).doubleValue()));
            }
        }
        return result;
    }
    
}

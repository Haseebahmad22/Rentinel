
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

    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    // DELETE /payments/{id}
    @DeleteMapping("/{id}")
    public void deletePayment(@PathVariable Integer id) {
        paymentRepository.deleteById(id);
    }

    @GetMapping("/count")
    public long getPaymentCount() {
        return paymentRepository.count();
    }

    @GetMapping("/totalPaymentAmount")
    public Double getTotalPaymentAmount() {
        return paymentRepository.getTotalPaymentAmount();
    }

    @GetMapping("/yearlyRent")
    public Double getYearlyRent() {
        return paymentRepository.getYearlyRent();
    }

    @PutMapping("/updateStatus")
    public Payment updatePaymentStatus(@RequestBody Payment updatedPayment) {
        Payment existingPayment = paymentRepository.findById(updatedPayment.getPaymentID())
                .orElseThrow(() -> new RuntimeException("Payment not found"));

        existingPayment.setPaymentStatus(updatedPayment.getPaymentStatus());

        return paymentRepository.save(existingPayment);
    }

     // DELETE /payments/property/{propertyID}
     @DeleteMapping("/property/{propertyID}")
     public void deletePaymentsByPropertyID(@PathVariable Integer propertyID) {
         try {
             paymentRepository.deleteAllByPropertyID(propertyID);
             System.out.println("Deleted payments for property ID: " + propertyID);
         } catch (Exception e) {
             System.out.println("Error deleting payments: " + e.getMessage());
             throw e;
         }
     }
     
}

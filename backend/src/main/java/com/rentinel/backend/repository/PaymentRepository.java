package com.rentinel.backend.repository;

import com.rentinel.backend.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {

    @Query(value = "SELECT FORMAT(CAST(p.paymentDate AS DATETIME), 'MMM') AS month, SUM(p.amount) AS totalAmount FROM Payment p WHERE p.paymentStatus = 'Paid' GROUP BY FORMAT(CAST(p.paymentDate AS DATETIME), 'MMM'), DATEPART(MONTH, CAST(p.paymentDate AS DATETIME)) ORDER BY DATEPART(MONTH, CAST(p.paymentDate AS DATETIME))", nativeQuery = true)
List<Object[]> getMonthlySummaryRaw();

}

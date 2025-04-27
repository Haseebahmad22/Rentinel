package com.rentinel.backend.repository;

import com.rentinel.backend.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {

    @Query("SELECT SUM(P.amount) FROM Payment P WHERE P.paymentStatus = 'Paid'")
    Double getTotalPaymentAmount();

    @Query(value = "SELECT SUM(p.amount) FROM payment p WHERE YEAR(p.paymentDate) = YEAR(GETDATE())", nativeQuery = true)
     Double getYearlyRent();

    // @Query("DELETE FROM Payment P WHERE P.propertyID = ?1")
    // void deleteByPropertyID(Integer propertyID);
    
    @Modifying
    @Transactional
    @Query("DELETE FROM PropertyAssignment pa WHERE pa.propertyID = :propertyID")
    void deleteAllByPropertyID(Integer propertyID);

}

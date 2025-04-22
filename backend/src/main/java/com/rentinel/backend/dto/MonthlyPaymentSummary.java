package com.rentinel.backend.dto;

public class MonthlyPaymentSummary {
    private String month;
    private Double totalAmount;

    // ✅ No-arg constructor required for Spring to serialize it
    public MonthlyPaymentSummary() {}

    public MonthlyPaymentSummary(String month, Double totalAmount) {
        this.month = month;
        this.totalAmount = totalAmount;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {  // ✅ Add setter
        this.month = month;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {  // ✅ Add setter
        this.totalAmount = totalAmount;
    }
}

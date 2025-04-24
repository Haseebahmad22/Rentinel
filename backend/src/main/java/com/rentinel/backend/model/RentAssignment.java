package com.rentinel.backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "rentAssignment")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RentAssignment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "assignmentID")
    private Integer assignmentID;

    @Column(name = "startDate", nullable = false)
    private LocalDate startDate;

    @Column(name = "dueDate", nullable = false)
    private LocalDate dueDate;

    @ManyToOne
    @JoinColumn(name = "propertyID", nullable = false,
                foreignKey = @ForeignKey(name = "FK_Property_Assignment"))
    private Property property;

    @ManyToOne
    @JoinColumn(name = "tenantID", nullable = false,
                foreignKey = @ForeignKey(name = "FK_Tenant_Assignment"))
    private Tenant tenant;
}

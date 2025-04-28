package com.rentinel.backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

// import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "Owner")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Owner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID") // matches SQL column name
    private Integer ID;

    @Column(name = "fullName", nullable = false, length = 50)
    private String fullName;

    @Column(name = "userName", nullable = false, unique = true, length = 50)
    private String userName;

    // @JsonIgnore
    @Column(name = "Password", nullable = false, length = 30)
    @JsonProperty("Password") // Explicitly map to JSON property "Password"
    private String Password;

    @Column(name = "email", nullable = false, length = 30)
    private String email;

    @Column(name = "CNIC", nullable = false, length = 13)
    @JsonProperty("CNIC") // Explicitly map to JSON property "CNIC"
    private String CNIC;

    @Column(name = "accountCreationDate", nullable = false)
    private LocalDate accountCreationDate;
}

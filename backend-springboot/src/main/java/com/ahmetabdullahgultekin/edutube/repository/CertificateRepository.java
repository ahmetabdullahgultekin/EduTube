package com.ahmetabdullahgultekin.edutube.repository;

import com.ahmetabdullahgultekin.edutube.model.Certificate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CertificateRepository extends JpaRepository<Certificate, Long> {
}

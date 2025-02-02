package com.ahmetabdullahgultekin.edutube.repository;

import com.ahmetabdullahgultekin.edutube.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {
}


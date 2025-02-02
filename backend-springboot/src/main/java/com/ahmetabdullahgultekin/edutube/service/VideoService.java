package com.ahmetabdullahgultekin.edutube.service;

import com.ahmetabdullahgultekin.edutube.model.Video;
import com.ahmetabdullahgultekin.edutube.repository.VideoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VideoService {

    private final VideoRepository videoRepository;

    public VideoService(VideoRepository videoRepository) {
        this.videoRepository = videoRepository;
    }

    public Video createVideo(Video video) {
        return videoRepository.save(video);
    }

    public Video getVideoById(Long id) {
        Optional<Video> video = videoRepository.findById(id);
        return video.orElseThrow(() -> new RuntimeException("Video not found"));
    }

    public List<Video> getAllVideos() {
        return videoRepository.findAll();
    }

    public Video updateVideo(Long id, Video videoDetails) {
        Video video = getVideoById(id);
        video.setTitle(videoDetails.getTitle());
        //video.setDescription(videoDetails.getDescription());
        video.setVideoUrl(videoDetails.getVideoUrl());
        return videoRepository.save(video);
    }

    public void deleteVideo(Long id) {
        Video video = getVideoById(id);
        videoRepository.delete(video);
    }
}
import {Component, OnInit} from '@angular/core';
import {Video} from '../../interfaces/video';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {VideoService} from '../../services/video.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-video-test',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './video-test.component.html',
  styleUrl: './video-test.component.css',
  providers: [
    VideoService
  ]
})
export class VideoTestComponent implements OnInit {

  videos: Video[] = [];
  video: Video = {id: 0, title: '', description: '', url: ''};
  videoId: number | undefined;
  updatedVideo: Video = {id: 0, title: '', description: '', url: ''};
  message: string = '';

  constructor(private videoService: VideoService) {
  }

  ngOnInit(): void {
    this.getAllVideos();
  }

  // Get all videos
  getAllVideos(): void {
    this.videoService.getAllVideos().subscribe(
      (response) => {
        this.videos = response;
      },
      (error) => {
        console.error('Error fetching videos', error);
      }
    );
  }

  // Get a video by ID
  getVideoById(): void {
    if (this.videoId) {
      this.videoService.getVideoById(this.videoId).subscribe(
        (response) => {
          this.video = response;
          this.message = 'Video fetched successfully!';
        },
        (error) => {
          this.message = 'Error fetching video!';
        }
      );
    }
  }

  // Create a new video
  createVideo(): void {
    this.videoService.createVideo(this.video).subscribe(
      (response) => {
        this.message = 'Video created successfully!';
        this.getAllVideos(); // Refresh video list
      },
      (error) => {
        this.message = 'Error creating video!';
      }
    );
  }

  // Update a video
  updateVideo(): void {
    if (this.videoId) {
      this.videoService.updateVideo(this.videoId, this.updatedVideo).subscribe(
        (response) => {
          this.message = 'Video updated successfully!';
          this.getAllVideos(); // Refresh video list
        },
        (error) => {
          this.message = 'Error updating video!';
        }
      );
    }
  }

  // Delete a video
  deleteVideo(id: number): void {
    this.videoService.deleteVideo(id).subscribe(
      () => {
        this.message = 'Video deleted successfully!';
        this.getAllVideos(); // Refresh video list
      },
      (error) => {
        this.message = 'Error deleting video!';
      }
    );
  }
}

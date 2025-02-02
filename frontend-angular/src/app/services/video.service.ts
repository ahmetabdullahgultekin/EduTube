import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Video} from '../interfaces/video';
import {environment} from '../environments/environment'; // Assuming you have an environment file

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = `${environment.apiUrl}/videos`; // Adjust URL based on your environment

  constructor(private http: HttpClient) {
  }

  // Create a new video
  createVideo(video: Video): Observable<Video> {
    return this.http.post<Video>(this.apiUrl, video);
  }

  // Get a video by ID
  getVideoById(id: number): Observable<Video> {
    return this.http.get<Video>(`${this.apiUrl}/${id}`);
  }

  // Get all videos
  getAllVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl);
  }

  // Update a video by ID
  updateVideo(id: number, video: Video): Observable<Video> {
    return this.http.put<Video>(`${this.apiUrl}/${id}`, video);
  }

  // Delete a video by ID
  deleteVideo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

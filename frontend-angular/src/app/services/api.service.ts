import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Replace with your API base URL
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  // GET request
  get<T>(endpoint: string, params: any = {}): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, {params})
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  // POST request
  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, body)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  // PUT request
  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}`, body)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  // DELETE request
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}`)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  // Handling errors
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;  // Or handle it in a custom way
  }
}

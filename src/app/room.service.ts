// room.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // This makes the service available application-wide
})
export class RoomService {
  private apiUrl = 'https://your-backend-api-url';  // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  // Method to fetch rooms data from the backend
  getRooms(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/rooms`);
  }
}

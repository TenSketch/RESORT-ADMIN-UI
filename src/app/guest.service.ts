// Import necessary modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Guest } from './guest';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  
  private baseUrl = 'http://localhost:8080/api/guests'; // Update with your backend API URL

  constructor(private http: HttpClient) { }

  // Function to fetch guest data from the backend
  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(`${this.baseUrl}/showguest`);
  }

  // Add more functions as needed to handle other CRUD operations

  createGuest(guest:Guest):Observable<Object>{
    return this.http.post(`${this.baseUrl}/addguest`,guest);
  }

  getGuestById(id:number):Observable<Guest>{
    return this.http.get<Guest>(`${this.baseUrl}/${id}`);
  }

  updateGuest(id: number, guest: Guest): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, guest).pipe(
      catchError((error: any) => {
        // Handle error here
        console.error('Error updating guest:', error);
        throw error; // Re-throwing the error to propagate it to the caller
      })
    );
  }


  deleteGuest(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000';
  findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  create(payload: { email: string; password: string; role: string }) {
    return this.http.post(`${this.apiUrl}/user`, payload);
  }

  findOne(id: number) {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

  update(id: number, payload: any) {
    return this.http.patch(`${this.apiUrl}/users/${id}`, payload);
  }

  remove(id: number) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
}

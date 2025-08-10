import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthToken } from '../shared/auth-token.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000';
  register(payload: { email: string; password: string; role: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, payload);
  }

  login(payload: { email: string; password: string }): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(`${this.apiUrl}/auth/login`, payload);
  }

  setToken(token: string) {
    AuthToken.setToken(token);
  }

  logout() {
    AuthToken.clear();
  }
}

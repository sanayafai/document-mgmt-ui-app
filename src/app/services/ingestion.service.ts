import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IngestionService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000';
  triggerOne(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/ingestion/trigger/${id}`, {});
  }

  triggerBulk(): Observable<any> {
    return this.http.post(`${this.apiUrl}/ingestion/bulk`, {});
  }

  status(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ingestion/status`);
  }
}

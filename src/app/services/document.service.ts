import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentModel } from '../models/document.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000';
  create(payload: DocumentModel): Observable<DocumentModel> {
    return this.http.post<DocumentModel>(`${this.apiUrl}/documents`, payload);
  }

  findAll(): Observable<DocumentModel[]> {
    return this.http.get<DocumentModel[]>(`${this.apiUrl}/documents`);
  }

  findOne(id: number): Observable<DocumentModel> {
    return this.http.get<DocumentModel>(`${this.apiUrl}/documents/${id}`);
  }

  update(id: number, payload: Partial<DocumentModel>) {
    return this.http.patch(`${this.apiUrl}/documents/${id}`, payload);
  }

  remove(id: number) {
    return this.http.delete(`${this.apiUrl}/documents/${id}`);
  }

  ingest(id: number) {
    return this.http.post(`${this.apiUrl}/documents/${id}/ingest`, {});
  }
}

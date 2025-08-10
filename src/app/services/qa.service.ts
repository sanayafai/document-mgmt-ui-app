import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AskQuestionDto, AnswerDto } from '../models/qa.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QaService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000';
  ask(payload: AskQuestionDto): Observable<AnswerDto> {
    return this.http.post<AnswerDto>(`${this.apiUrl}/qa`, payload);
  }
}

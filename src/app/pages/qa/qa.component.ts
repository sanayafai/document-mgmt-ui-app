import { Component } from '@angular/core';
import { QaService } from '../../services/qa.service';
import { FormsModule } from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-qa',
  standalone: true,
  imports: [FormsModule, NgIf],
  template: `
    <h2>Ask a question</h2>
    <form (ngSubmit)="ask()" #f="ngForm">
      <input [(ngModel)]="question" name="question" placeholder="Type your question" required>
      <button type="submit">Ask</button>
    </form>
    <div *ngIf="answer">
      <h3>Answer</h3>
      <p>{{answer.answer}}</p>
    </div>
  `
})
export class QaComponent {
  question = '';
  answer: any = null;

  constructor(private svc: QaService) {}

  ask() {
    this.svc.ask({ question: this.question }).subscribe(res => this.answer = res);
  }
}

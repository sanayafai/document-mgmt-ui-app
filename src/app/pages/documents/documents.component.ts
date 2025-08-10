import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <h2>Documents</h2>
    <form (ngSubmit)="create()" #f="ngForm">
      <input [(ngModel)]="title" name="title" placeholder="title" required>
      <input [(ngModel)]="content" name="content" placeholder="content" required>
      <button type="submit">Create</button>
    </form>

    <ul>
      <li *ngFor="let d of docs">
        <a [routerLink]="['/documents', d.id]">{{d.title}}</a>
        <button (click)="ingest(d.id)">Ingest</button>
        <button (click)="remove(d.id)">Delete</button>
      </li>
    </ul>
  `
})
export class DocumentsComponent implements OnInit {
  docs: any[] = [];
  title = '';
  content = '';

  constructor(private svc: DocumentService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.svc.findAll().subscribe(res => this.docs = res || []);
  }

  create() {
    this.svc.create({ title: this.title, content: this.content }).subscribe(() => {
      this.title=''; this.content=''; this.load();
    });
  }

  ingest(id: number) {
    this.svc.ingest(id).subscribe(() => this.load());
  }

  remove(id: number) {
    this.svc.remove(id).subscribe(() => this.load());
  }
}

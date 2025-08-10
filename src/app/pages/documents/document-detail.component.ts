import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-document-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="doc">
      <h3>{{doc.title}}</h3>
      <p>{{doc.content}}</p>
      <button (click)="ingest()">Ingest</button>
    </div>
  `
})
export class DocumentDetailComponent implements OnInit {
  doc: any;

  constructor(private svc: DocumentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.svc.findOne(id).subscribe(res => this.doc = res);
  }

  ingest() {
    if (!this.doc?.id) return;
    this.svc.ingest(this.doc.id).subscribe(() => alert('Ingested'));
  }
}

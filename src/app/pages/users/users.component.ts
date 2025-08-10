import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Users</h2>
    <ul>
      <li *ngFor="let u of users">
        {{u.email}} ({{u.role}})
        <button (click)="remove(u.id)">Delete</button>
      </li>
    </ul>
  `
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  constructor(private svc: UserService) {}

  ngOnInit(): void {
    this.svc.findAll().subscribe(res => this.users = res || []);
  }

  remove(id: number) {
    this.svc.remove(id).subscribe(() => this.svc.findAll().subscribe(r => this.users = r || []));
  }
}

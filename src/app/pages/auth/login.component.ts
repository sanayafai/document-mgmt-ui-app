import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="onSubmit()" #f="ngForm">
      <label>Email: <input name="email" [(ngModel)]="email"></label><br>
      <label>Password: <input name="password" type="password" [(ngModel)]="password"></label><br>
      <button type="submit">Login</button>
    </form>
    <p *ngIf="error" style="color:red">{{error}}</p>
  `
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.login({ email: this.email, password: this.password }).subscribe({
      next: res => {
        if (res && (res as any).access_token) {
          this.auth.setToken((res as any).access_token);
          this.router.navigateByUrl('/documents');
        }
      },
      error: err => this.error = 'Login failed'
    });
  }
}

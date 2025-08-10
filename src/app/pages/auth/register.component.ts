import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Register</h2>
    <form (ngSubmit)="onSubmit()">
      <label>Email: <input name="email" [(ngModel)]="email"></label><br>
      <label>Password: <input name="password" type="password" [(ngModel)]="password"></label><br>
      <label>Role:
        <select [(ngModel)]="role" name="role">
          <option value="viewer">viewer</option>
          <option value="editor">editor</option>
          <option value="admin">admin</option>
        </select>
      </label><br>
      <button type="submit">Register</button>
    </form>
  `
})
export class RegisterComponent {
  email = '';
  password = '';
  role = 'viewer';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.register({ email: this.email, password: this.password, role: this.role }).subscribe({
      next: () => this.router.navigateByUrl('/auth/login'),
      error: () => alert('Register failed')
    });
  }
}

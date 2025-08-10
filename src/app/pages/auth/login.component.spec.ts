import { render, screen } from '@testing-library/angular';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';

describe('LoginComponent', () => {
  it('renders login form', async () => {
    await render(LoginComponent, { providers: [{ provide: AuthService, useValue: { login: () => ({ subscribe: () => {} }) } }] });
    expect(screen.getByText('Login')).toBeTruthy();
  });
});

export class AuthToken {
  static getToken(): string | null {
    return localStorage.getItem('auth_token');
  }
  static setToken(token: string) {
    localStorage.setItem('auth_token', token);
  }
  static clear() {
    localStorage.removeItem('auth_token');
  }
}

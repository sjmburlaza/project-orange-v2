import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthResponse, User } from 'src/app/core/auth/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  setSession(response: AuthResponse): void {
    this.accessToken = response.accessToken;
    this.refreshToken = response.refreshToken;
    this.userSubject.next(response.user);
  }

  clearSession(): void {
    this.accessToken = null;
    this.refreshToken = null;
    this.userSubject.next(null);
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  getRefreshToken(): string | null {
    return this.refreshToken;
  }

  isAuthenticated(): boolean {
    return !!this.accessToken;
  }

  hasRole(role: string): boolean {
    const user = this.userSubject.value;
    return user?.roles.includes(role) ?? false;
  }
}

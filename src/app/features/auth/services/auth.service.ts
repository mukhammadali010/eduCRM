import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { components } from '../../../shared/components/models/backend/backend.interface';

export type LoginRequest = components['schemas']['Login'];
export type SignupRequest = components['schemas']['Signup'];
export type Customer = components['schemas']['Customer'];

/** Body POST /login actually returns: `{ customer: { ... } }`. */
export type LoginResult = components['responses']['LoginResponse']['content']['application/json'];
export type LoggedInCustomer = NonNullable<LoginResult['customer']>;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;
  private readonly http = inject(HttpClient);

  private readonly loggedInCustomer = signal<LoggedInCustomer | null>(null);

  readonly customer = this.loggedInCustomer.asReadonly();
  readonly isLoggedIn = computed(() => this.loggedInCustomer() !== null);

  login(credentials: LoginRequest): Observable<LoginResult> {
    // The API authenticates with a session cookie, so it has to ride along on every call.
    return this.http
      .post<LoginResult>(`${this.apiUrl}/login`, credentials, { withCredentials: true })
      .pipe(tap(response => this.loggedInCustomer.set(response.customer ?? null)));
  }

  register(signup: SignupRequest): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}/signup`, signup, { withCredentials: true });
  }

  logout(): Observable<{ msg?: string }> {
    return this.http
      .post<{ msg?: string }>(`${this.apiUrl}/logout`, null, { withCredentials: true })
      .pipe(tap(() => this.loggedInCustomer.set(null)));
  }
}

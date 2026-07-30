import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { ButtonComponent } from '../../../shared/components/button/button';
import { InputDefault } from '../../../shared/components/inputs/input-default/input-default';
import { InputPassword } from '../../../shared/components/inputs/input-password/input-password';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ButtonComponent, InputDefault, InputPassword, ReactiveFormsModule],
  templateUrl: './login.html',
})
export class Login {
  private readonly authService = inject(AuthService);
  private readonly destroyRef = inject(DestroyRef);

  // The API signs in by username, not email, so no Validators.email here —
  // it would lock out anyone whose username isn't an email address.
  readonly loginForm = new FormGroup({
    username: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
  });

  readonly isSubmitting = signal(false);
  readonly errorMessage = signal('');

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set('');

    this.authService
      .login(this.loginForm.getRawValue())
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.isSubmitting.set(false)),
      )
      .subscribe({
        next: () => {
          this.loginForm.reset();
        },
        error: () => {
          this.errorMessage.set('Incorrect username or password.');
        },
      });
  }
}

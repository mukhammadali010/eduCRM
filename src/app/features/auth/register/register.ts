import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { ButtonComponent } from '../../../shared/components/button/button';
import { InputDefault } from '../../../shared/components/inputs/input-default/input-default';
import { InputEmail } from '../../../shared/components/inputs/input-email/input-email';
import { InputPassword } from '../../../shared/components/inputs/input-password/input-password';
import { AuthService, SignupRequest } from '../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [InputEmail, InputPassword, ButtonComponent, InputDefault, ReactiveFormsModule],
  templateUrl: './register.html',
})
export class Register {
  private readonly authService = inject(AuthService);
  private readonly destroyRef = inject(DestroyRef);

  // No `avatar` control: the API treats it as optional and the form has no field for it.
  // Declaring it as required here left the form permanently invalid, so submit never fired.
  readonly registerForm = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    username: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    phone: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  readonly isSubmitting = signal(false);
  readonly errorMessage = signal('');
  readonly successMessage = signal('');

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set('');
    this.successMessage.set('');

    const payload: SignupRequest = this.registerForm.getRawValue();

    this.authService
      .register(payload)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.isSubmitting.set(false)),
      )
      .subscribe({
        next: () => {
          this.successMessage.set('Account created. You can log in now.');
          this.registerForm.reset();
        },
        error: () => {
          this.errorMessage.set('Could not create the account. Please check your details and try again.');
        },
      });
  }
}

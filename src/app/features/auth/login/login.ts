import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button';
import { InputEmail } from '../../../shared/components/inputs/input-email/input-email';
import { InputPassword } from '../../../shared/components/inputs/input-password/input-password';

@Component({
  selector: 'app-login',
  imports: [ButtonComponent, InputEmail, InputPassword],
  templateUrl: './login.html',
})
export class Login {}

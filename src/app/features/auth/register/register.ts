import { Component } from '@angular/core';
import { InputEmail } from '../../../shared/components/inputs/input-email/input-email';
import { InputPassword } from '../../../shared/components/inputs/input-password/input-password';
import { ButtonComponent } from '../../../shared/components/button/button';
import { InputDefault } from '../../../shared/components/inputs/input-default/input-default';

@Component({
  selector: 'app-register',
  imports: [InputEmail, InputPassword, ButtonComponent, InputDefault],
  templateUrl: './register.html',
  styles: ``,
})
export class Register {}

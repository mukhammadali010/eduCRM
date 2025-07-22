import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [MatIconModule],
  templateUrl: './button.html',
})
export class ButtonComponent {
  label = input<string>('Click me');
  type = input<'button' | 'submit' | 'reset' | 'custom'>('button');
  disabled = input<boolean>(false);
  textcolor = input<string>('');
  bgcolor = input<string>('');
  icon = input<string>('');
  iconPosition = input<string>('');
  buttonClick = output<void>();
}

import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [MatIconModule, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  label = input<string>('Click me');
  type = input<'button' | 'submit' | 'reset' | 'custom'>('button');
  disabled = input<boolean>(false);
  color = input<'primary' | 'secondary' | 'default'>('default');
  icon = input<string>('');
  iconPosition = input<string>('');
  buttonClick = output<void>();
}

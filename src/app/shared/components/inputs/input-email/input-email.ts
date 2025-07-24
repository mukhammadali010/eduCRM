import { Component, forwardRef, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-input-email',
  imports: [MatIconModule],
  templateUrl: './input-email.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputEmail),
      multi: true,
    },
  ],
})
export class InputEmail implements ControlValueAccessor {
  type = input<'text' | 'number' | 'password' | 'email' | 'search' | 'textarea' | 'select'>();
  options = input<{ label: string; value: string | number }[]>([]);
  placeholder = input<string>('');
  required = input<boolean>(false);

  value = signal<string | number | null>('');
  isDisabled = signal(false);

  private onChange: (value: string | number | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string | number | null): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: string | number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
  updateValue(value: string | number): void {
    this.value.set(value);
    this.onChange(value);
    this.onTouched();
  }
}

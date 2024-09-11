import {Component, forwardRef, HostBinding, input, Input,} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR,} from '@angular/forms';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [AngularSvgIconModule, FormsModule, NgClass],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => PasswordComponent),
    },
  ],
})
export class PasswordComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() size: 'small' | 'medium' | 'big' = 'medium';
  @Input() width: string = '';
  @Input() bgHidden: boolean = false;
  @Input() control!: AbstractControl | null;

  autocomplete = input<boolean>(false);

  public passwordShown: boolean = false;
  value: string = '';
  disabled: boolean = false;

  constructor(private sanitizer: DomSanitizer) {
  }

  @HostBinding('style')
  get myStyle(): SafeStyle {
    let width = this.width;
    return this.sanitizer.bypassSecurityTrustStyle(`
      width: ${width};
    `);
  }

  onChange: any = () => {
  };

  onTouched: any = () => {
  };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

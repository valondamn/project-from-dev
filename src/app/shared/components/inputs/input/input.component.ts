import {
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  input,
  model,
  output,
  ViewChild,
} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR,} from '@angular/forms';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
  standalone: true,
  imports: [AngularSvgIconModule, NgClass, FormsModule],
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() label!: string;
  @Input() helper!: string;
  @Input() font: 'normal' | 'bold' = 'normal';
  @Input() size: 'small' | 'medium' | 'big' = 'medium';
  @Input() type: '' | 'search' = '';
  @Input() width: string = '';
  @Input() bgHidden: boolean = false;
  @Input() control!: AbstractControl | null;

  @Input() clearBtnShown: boolean = false;

  value = model('');
  autocomplete = input<boolean>(false);
  @Input() disabled: boolean = false;

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  onEnter = output();

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
    this.value.set(value);
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

  clearValue() {
    this.value.set('');
    this.onChange('');
  }

  @HostListener('keydown.enter', ['$event'])
  onEnterKey(event: KeyboardEvent): void {
    event.preventDefault();
  }
}

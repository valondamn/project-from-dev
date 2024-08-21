import {Component, ElementRef, HostBinding, HostListener, Input, model, output, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormsModule} from "@angular/forms";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";
import {NgClass} from "@angular/common";
import {SvgIconComponent} from "angular-svg-icon";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    NgClass,
    SvgIconComponent,
    FormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
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

  @Input() clearBtnShown: boolean = false;

  value = model('');
  @Input() disabled: boolean = false;

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  onEnter = output();

  constructor(private sanitizer: DomSanitizer) {}

  onChange: any = () => {};
  onTouched: any = () => {};

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

  @HostBinding('style')
  get myStyle(): SafeStyle {
    let width = this.width;
    return this.sanitizer.bypassSecurityTrustStyle(`
      width: ${width};
    `);
  }

  @HostListener('keydown.enter', ['$event'])
  onEnterKey(event: KeyboardEvent): void {
    event.preventDefault();
  }
}

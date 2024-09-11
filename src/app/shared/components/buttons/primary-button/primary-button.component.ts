import {Component, EventEmitter, input, Input, Output} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
  standalone: true,
  imports: [NgClass, RouterLink, ProgressSpinnerModule, NgStyle],
})
export class PrimaryButtonComponent {
  @Input({required: true}) theme!: 'dark' | 'light';
  @Input({required: true}) styling!:
    | 'standard'
    | 'outlined'
    | 'outlined-dark';
  @Input({required: true}) type!: 'button' | 'link' | 'routerLink' | 'submit';
  @Input({required: true}) label: string = '';
  @Input() disabled: boolean = false;
  @Input() height!: string;
  isLoading = input<boolean>(false);

  @Input() link: string = '#';
  @Input() target: 'self' | 'blank' = 'blank';

  @Output() onClick: EventEmitter<void> = new EventEmitter();


  click(event: Event) {
    event.preventDefault();
    this.onClick.emit();
  }
}

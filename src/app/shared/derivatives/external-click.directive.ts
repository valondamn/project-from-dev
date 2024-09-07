import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[externalClick]',
  standalone: true,
})
export class ExternalClickDirective {
  @Output() closeEmitter = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    // Проверяем, был ли клик вне текущего элемента
    if (!this.el.nativeElement.contains(event.target)) {
      this.closeEmitter.emit(true);
    }
  }
}

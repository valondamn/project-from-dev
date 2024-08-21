import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
})
export class ModalComponent implements OnChanges {
  @Input({ required: true }) visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() title: string = '';
  @Input() hasOverflow: boolean = false;
  @Input() isFullscreen: boolean = false;
  @Input() width!: string;
  @Input() height!: string;

  @ViewChild('modalBody') modalBody!: ElementRef;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible']) {
      if (changes['visible'].currentValue) {
        this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
      } else {
        this.renderer.setStyle(this.document.body, 'overflow', 'auto');
      }
    }
    this.visibleChange.emit(this.visible);
  }

  closeModal() {
    this.visibleChange.emit(false);
  }

  @HostListener('click', ['$event.target'])
  onOutsideClick(target: any) {
    if (this.visible && !this.modalBody.nativeElement.contains(target)) {
      this.closeModal();
    }
  }
}

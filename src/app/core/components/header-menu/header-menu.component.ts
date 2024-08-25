import {Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ExternalClickDirective} from "../../../shared/derivatives/external-click.directive";

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    ExternalClickDirective
  ],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
  @Input() isVisible: boolean = false;
  @Output() closeDropdown: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;


  closeModal() {
    this.isVisible = false
  }

  @HostListener('click', ['$event.target'])
  onOutsideClick(target: any) {
    if (this.isVisible && this.dropdownMenu.nativeElement.contains(target)) {
      this.closeModal();
    }
  }
}

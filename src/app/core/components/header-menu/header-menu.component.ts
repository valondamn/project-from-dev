import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {CommonModule, DOCUMENT, NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ExternalClickDirective} from '../../../shared/derivatives/external-click.directive';
import {SvgIconComponent} from 'angular-svg-icon';
import {PrimaryButtonComponent} from "../../../shared/components/buttons/primary-button/primary-button.component";
import {LoginService} from "../../../layout/login/login.service";

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    RouterLink,
    ExternalClickDirective,
    SvgIconComponent,
    PrimaryButtonComponent
  ],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent implements OnChanges, OnInit {
  @Input({required: true}) visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() title: string = '';
  @Input() hasOverflow: boolean = false;
  @Input() isFullscreen: boolean = false;
  @Input() width!: string;
  @Input() height!: string;

  @ViewChild('modalBody') modalBody!: ElementRef;

  userProfile: any = null; // Для хранения данных профиля


  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.fetchUserProfile();
  }

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
    ''
  }

  @HostListener('click', ['$event.target'])
  onOutsideClick(target: any) {
    if (this.visible && !this.modalBody.nativeElement.contains(target)) {
      this.closeModal();
    }
  }

  onLogout() {
    this.loginService.logout();  // Вызываем метод logout из LoginService
    this.closeModal();  // Закрываем меню после выхода
  }

  fetchUserProfile() {
    this.loginService.getProfile().subscribe({
      next: (profile: any) => {
        this.userProfile = profile; // Сохраняем данные профиля
      },
      error: (error: any) => {
        console.error('Ошибка получения данных профиля:', error);
      }
    });
  }
}

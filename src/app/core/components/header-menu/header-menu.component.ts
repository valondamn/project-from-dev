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

  userProfile$ = this.loginService.userProfile$;


  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.loginService.checkAndRefreshToken().subscribe({
      next: (isSuccess: boolean) => {
        if (!isSuccess) {
          this.loginService.logout();  // Разлогинить пользователя, если не удалось обновить токен
        } else {
          this.loginService.fetchUserProfile().subscribe();  // Загрузить профиль после успешного обновления токена
        }
      },
      error: (err) => {
        console.error('Ошибка при проверке токена:', err);
        this.loginService.logout();
      }
    });
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


  // Проверка аутентификации перед получением данных профиля
  // checkAndFetchUserProfile() {
  //   if (this.loginService.isAuthenticated()) {
  //     this.loginService.fetchUserProfile().subscribe({
  //       next: (profile: User | null) => {
  //         if (profile) {
  //           this.userProfile = profile;
  //         }
  //       },
  //       error: (err) => {
  //         console.error('Error fetching user profile:', err);
  //       },
  //     });
  //   } else {
  //     console.log('User not authenticated');
  //   }
  // }
  //
  // fetchUserProfile() {
  //   this.loginService.getProfile().subscribe({
  //     next: (profile: User) => {
  //       this.userProfile = profile;  // Получаем данные профиля
  //     }
  //   });
  // }
}

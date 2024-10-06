import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PrimaryButtonComponent} from '../../shared/components/buttons/primary-button/primary-button.component';
import {AccordionCardComponent} from '../../shared/components/accordion-card/accordion-card.component';
import {ModalComponent} from "../../shared/components/modal/modal.component";
import {SvgIconComponent} from "angular-svg-icon";
import {environment} from "../../../enviroments/environment";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [PrimaryButtonComponent, ReactiveFormsModule, AccordionCardComponent, ModalComponent, SvgIconComponent],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  profileForm: FormGroup; // Реактивная форма

  private authUrl = `${environment.serverURL}/auth/me/`;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    // Инициализация реактивной формы
    this.profileForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      last_name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
      phone_number: ['', [Validators.required, Validators.maxLength(20)]],
      date_of_birth: [''],
      country: ['', [Validators.required, Validators.maxLength(50)]],
      gender: [''], // Поле gender
      language: ['ru'], // Default to Russian
      avatar: [''], // Default to Russian

    });
  }

  ngOnInit(): void {
    this.loadProfile();
  }

  // Загрузка профиля и заполнение формы
  loadProfile() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Используем токен из localStorage
    });

    this.http.get<any>(this.authUrl, {headers}).subscribe(
      (profileData) => {
        // Заполнение формы данными пользователя
        this.profileForm.patchValue({
          first_name: profileData.first_name,
          last_name: profileData.last_name,
          email: profileData.email,
          phone_number: profileData.phone_number,
          date_of_birth: profileData.date_of_birth,
          country: profileData.country,
          gender: profileData.gender === 1 ? 'male' : 'female', // Предполагаем: 1 = male, 2 = female
          language: profileData.language || 'ru',
          avatar: profileData.avatar // Заполнение аватара

        });
      },
      (error) => {
        console.error('Ошибка при загрузке профиля:', error);
      }
    );
  }

  // Метод для сохранения профиля
  saveProfile() {
    if (this.profileForm.invalid) {
      console.error('Форма заполнена некорректно');
      return;
    }

    const updatedProfile = this.profileForm.value;
    updatedProfile.gender = updatedProfile.gender === 'male' ? 1 : 2; // Преобразование значения gender

    if (updatedProfile.avatar.startsWith('data:image')) {
      updatedProfile.avatar = updatedProfile.avatar.split(',')[1]; // Удаление префикса Base64
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Используем токен из localStorage
    });

    this.http.put(this.authUrl, updatedProfile, {headers}).subscribe(
      (response) => {
        console.log('Профиль успешно обновлен', response);
      },
      (error) => {
        console.error('Ошибка при обновлении профиля:', error);
      }
    );
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Установка base64 изображения в поле avatar
        this.profileForm.patchValue({
          avatar: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  }

}

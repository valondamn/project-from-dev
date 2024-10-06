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
  selectedFile!: File | null; // Для хранения загруженного файла аватара

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
      avatar: [''], // Поле для аватара
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
          gender: profileData.gender === 1 ? 'male' : 'female',
          avatar: profileData.avatar // Заполнение поля аватара
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

    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    });

    // Если выбрали новый аватар, используем FormData для отправки изображения и других данных
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('first_name', updatedProfile.first_name);
      formData.append('last_name', updatedProfile.last_name);
      formData.append('email', updatedProfile.email);
      formData.append('phone_number', updatedProfile.phone_number);
      formData.append('date_of_birth', updatedProfile.date_of_birth);
      formData.append('country', updatedProfile.country);
      formData.append('gender', updatedProfile.gender.toString());

      // Добавляем файл аватара в FormData
      formData.append('avatar', this.selectedFile);

      this.http.put(this.authUrl, formData, {headers}).subscribe(
        (response) => {
          console.log('Профиль успешно обновлен с аватаром', response);
          this.selectedFile = null; // Сбрасываем файл после успешного обновления
        },
        (error) => {
          console.error('Ошибка при обновлении профиля с аватаром:', error);
        }
      );
    } else {
      // Если аватар не обновляется, отправляем только текстовые данные
      this.http.put(this.authUrl, updatedProfile, {headers}).subscribe(
        (response) => {
          console.log('Профиль успешно обновлен', response);
        },
        (error) => {
          console.error('Ошибка при обновлении профиля:', error);
        }
      );
    }
  }

  // Обработка выбора файла для аватара
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Отображение выбранного аватара в интерфейсе
      const reader = new FileReader();
      reader.onload = () => {
        this.profileForm.patchValue({
          avatar: reader.result as string, // Устанавливаем base64 в форму для отображения
        });
      };
      reader.readAsDataURL(file);
    }
  }
}

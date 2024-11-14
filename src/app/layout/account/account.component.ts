import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PrimaryButtonComponent} from '../../shared/components/buttons/primary-button/primary-button.component';
import {AccordionCardComponent} from '../../shared/components/accordion-card/accordion-card.component';
import {ModalComponent} from "../../shared/components/modal/modal.component";
import {SvgIconComponent} from "angular-svg-icon";
import {environment} from "../../../enviroments/environment";
import {MessageService} from 'primeng/api'; // Импорт MessageService
import {ToastModule} from 'primeng/toast'; // Импорт ToastModule

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [PrimaryButtonComponent, ReactiveFormsModule, AccordionCardComponent, ModalComponent, SvgIconComponent, ToastModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [MessageService], // Добавление MessageService в провайдеры компонента
})
export class AccountComponent implements OnInit {
  profileForm: FormGroup;
  selectedFile!: File | null;

  private authUrl = `${environment.serverURL}/auth/me/`;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private messageService: MessageService // Внедрение MessageService
  ) {
    this.profileForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      last_name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
      phone_number: ['', [Validators.required, Validators.maxLength(20)]],
      date_of_birth: [''],
      country: ['', [Validators.required, Validators.maxLength(50)]],
      gender: [''],
      avatar: [''],
    });
  }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    });

    this.http.get<any>(this.authUrl, {headers}).subscribe(
      (profileData) => {
        this.profileForm.patchValue({
          first_name: profileData.first_name,
          last_name: profileData.last_name,
          email: profileData.email,
          phone_number: profileData.phone_number,
          date_of_birth: profileData.date_of_birth,
          country: profileData.country,
          gender: profileData.gender === 1 ? 'male' : 'female',
          avatar: profileData.avatar,
        });
      },
      (error) => {
        console.error('Ошибка при загрузке профиля:', error);
        this.messageService.add({severity: 'error', summary: 'Ошибка', detail: 'Не удалось загрузить профиль'});
      }
    );
  }

   saveProfile() {
    if (this.profileForm.invalid) {
      console.error('Форма заполнена некорректно');
      this.messageService.add({
        severity: 'error',
        summary: 'Ошибка',
        detail: 'Пожалуйста, заполните все обязательные поля'
      });
      return;
    }

    const updatedProfile = this.profileForm.value;
    updatedProfile.gender = updatedProfile.gender === 'male' ? 1 : 2;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    });

    const formData = new FormData();
    formData.append('first_name', updatedProfile.first_name);
    formData.append('last_name', updatedProfile.last_name);
    formData.append('email', updatedProfile.email);
    formData.append('phone_number', updatedProfile.phone_number);
    formData.append('date_of_birth', updatedProfile.date_of_birth);
    formData.append('country', updatedProfile.country);
    formData.append('gender', updatedProfile.gender.toString());

    if (this.selectedFile) {
      formData.append('avatar', this.selectedFile); // Если файл выбран, добавляем его
    } else if (updatedProfile.avatar === null) {
      formData.append('avatar', ''); // Явно указываем, что аватар должен быть удален
    }

    this.http.put(this.authUrl, formData, {headers}).subscribe(
      (response) => {
        console.log('Профиль успешно обновлен', response);
        this.selectedFile = null;
        this.messageService.add({severity: 'success', summary: 'Успех', detail: 'Профиль успешно обновлен'});
      },
      (error) => {
        console.error('Ошибка при обновлении профиля:', error);
        this.messageService.add({severity: 'error', summary: 'Ошибка', detail: 'Не удалось обновить профиль'});
      }
    );
  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.profileForm.patchValue({
          avatar: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  removeAvatar() {
    this.profileForm.patchValue({avatar: null});
    this.selectedFile = null;
    this.messageService.add({severity: 'info', summary: 'Информация', detail: 'Аватар удален'});
  }
}

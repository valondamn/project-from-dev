import { Component, OnInit } from '@angular/core';
import { BenefitsCardsComponent } from '../../shared/components/benefits-cards/benefits-cards.component';
import { StaffService } from '../../shared/services/staff.service';
import { Staff } from '../../shared/interfaces/staff.interface';
import { NgStyle } from '@angular/common';
import { StaffCardsComponent } from '../../shared/components/staff-cards/staff-cards.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { PrimaryButtonComponent } from '../../shared/components/buttons/primary-button/primary-button.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { PaginatorModule } from 'primeng/paginator';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-staff-page',
  standalone: true,
  imports: [
    BenefitsCardsComponent,
    NgStyle,
    StaffCardsComponent,
    ModalComponent,
    PrimaryButtonComponent,
    SvgIconComponent,
    PaginatorModule,
    ReactiveFormsModule,
  ],
  templateUrl: './staff-page.component.html',
  styleUrl: './staff-page.component.scss',
})
export class StaffPageComponent implements OnInit {
  public isLoading: boolean = true;
  isVisible: boolean = false;
  public staffForm!: FormGroup;
  selectedFile!: File | null;

  public staffList!: Staff[];

  constructor(
    public staffService: StaffService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.getStaffList();
    this.initForm();
  }

  private initForm() {
    this.staffForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.maxLength(100)]],
      last_name: ['', [Validators.required, Validators.maxLength(100)]],
      username: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      phone_number: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      company: ['', Validators.required],
      coins: [0, [Validators.required, Validators.min(0)]], // Добавлено поле coins
      avatar: [''],
    });
  }

  public getStaffList() {
    this.isLoading = true;
    this.staffService.getStaffList().subscribe(
      (data) => {
        this.staffList = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching benefits:', error);
        this.isLoading = false;
      },
    );
  }
  public openModal() {
    this.isVisible = true;
  }

  public closeModal() {
    this.isVisible = false;
  }
  public addNewStaff() {
    if (this.staffForm.valid) {
      const formData = new FormData();

      // Добавляем все значения формы, кроме аватара
      Object.keys(this.staffForm.controls).forEach((key) => {
        if (key !== 'avatar') {
          formData.append(key, this.staffForm.get(key)?.value);
        }
      });

      // Добавляем аватар, если он был выбран
      if (this.selectedFile) {
        formData.append('avatar', this.selectedFile, this.selectedFile.name);
      }

      this.staffService.addStaff(formData).subscribe(
        (response) => {
          console.log('User created successfully:', response);
          this.getStaffList(); // Обновляем список сотрудников
          this.closeModal();
          this.staffForm.reset();
        },
        (error) => {
          console.error('Error creating user:', error);
        },
      );
    } else {
      console.error('Form is invalid');
    }
  }

  public onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.staffForm.patchValue({
          avatar: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  public removeAvatar() {
    this.selectedFile = null;
    this.staffForm.patchValue({
      avatar: '',
    });
  }

  public deleteStaff(id: number) {
    this.staffService.deleteUser(id).subscribe(
      (response) => {
        console.log('User deleted successfully:', response);
        this.getStaffList(); // Обновляем список сотрудников после удаления
      },
      (error) => {
        console.error('Error deleting user:', error);
        this.getStaffList(); // Обновляем список сотрудников после удаления
      },
    );
  }
}

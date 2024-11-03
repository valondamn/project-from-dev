import { Component, OnInit } from '@angular/core';
import { BenefitsTop, Cards, Categories } from '../main/main.interface';
import { CatalogService } from './catalog.service';
import { CategoriesService } from '../../shared/services/categories.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  public products!: BenefitsTop[];
  public filteredBenefits!: Cards[]; // для фильтрованных бонусов
  public categories!: Categories[];
  public benefits!: Cards[];
  public selectedCategory: number = 0; // "Все" по умолчанию, поэтому 0
  public benefitForm!: FormGroup;
  public selectedPhoto: File | null = null;
  public photoPreview: string | null = null;
  public isVisible: boolean = false;

  public isEditMode: boolean = false;
  private currentBenefitId!: number;
  constructor(
    private catalogService: CatalogService,
    public categoriesService: CategoriesService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.getCatalog();
    this.getCategories();
    this.initForm();
  }

  private initForm() {
    this.benefitForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      sub_name: ['', Validators.maxLength(50)],
      description: ['', Validators.required],
      company: ['', Validators.maxLength(50)],
      expired_date: ['', Validators.required],
      cost: [0, [Validators.required, Validators.min(0)]],
      category: [0, Validators.required],
      photo: [''],
    });
  }

  public deleteBenefit(id: number): void {
    this.catalogService.deleteBenefit(id).subscribe(
      () => {
        console.log('Benefit deleted successfully');
        this.getCatalog(); // Refresh the benefits list
      },
      (error) => {
        console.error('Error deleting benefit:', error);
      },
    );
  }

  public onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedPhoto = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.benefitForm.patchValue({
          photo: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  public removePhoto(): void {
    this.selectedPhoto = null;
    this.photoPreview = null;
    this.benefitForm.patchValue({ photo: '' });
  }

  public addBenefit(): void {
    if (this.benefitForm.valid) {
      const formData = new FormData();

      // Добавляем все значения формы, кроме аватара
      Object.keys(this.benefitForm.controls).forEach((key) => {
        if (key !== 'photo') {
          formData.append(key, this.benefitForm.get(key)?.value);
        }
      });

      // Add the photo if it was selected
      if (this.selectedPhoto) {
        formData.append('photo', this.selectedPhoto, this.selectedPhoto.name);
      }

      this.catalogService.addBenefit(formData).subscribe(
        (response) => {
          console.log('Benefit created successfully:', response);
          this.getCatalog(); // Refresh the benefits list
          this.closeModal();
        },
        (error) => {
          console.error('Error creating benefit:', error);
        },
      );
    } else {
      console.error('Form is invalid');
    }
  }

  public addOrUpdateBenefit(): void {
    if (this.benefitForm.valid) {
      const formData = new FormData();

      // Add form data, excluding the photo if not being updated
      Object.keys(this.benefitForm.controls).forEach((key) => {
        if (key !== 'photo') {
          formData.append(key, this.benefitForm.get(key)?.value);
        }
      });

      if (this.isEditMode) {
        // Update existing benefit
        this.catalogService
          .updateBenefit(this.currentBenefitId, formData)
          .subscribe(
            (response) => {
              console.log('Benefit updated successfully:', response);
              this.getCatalog();
              this.closeModal();
              this.isEditMode = false;
            },
            (error) => {
              console.error('Error updating benefit:', error);
            },
          );
      } else {
        // Add new benefit
        this.catalogService.addBenefit(formData).subscribe(
          (response) => {
            console.log('Benefit created successfully:', response);
            this.getCatalog();
            this.closeModal();
          },
          (error) => {
            console.error('Error creating benefit:', error);
          },
        );
      }
    } else {
      console.error('Form is invalid');
    }
  }

  public getCatalog(): void {
    this.catalogService.getBenefits().subscribe(
      (data) => {
        this.benefits = data;
        this.filterBenefits(); // фильтруем при загрузке данных
      },
      (error) => {
        console.error('Error fetching benefits:', error);
      },
    );
  }

  public getCategories(): void {
    this.categoriesService.getCategories().subscribe(
      (data) => {
        // Добавляем категорию "Все" с id 0
        this.categories = [
          { id: 0, name: 'Все', description: '', photo: '' },
          ...data,
        ];
      },
      (error) => {
        console.error('Error fetching categories:', error);
      },
    );
  }

  public toggleCategory(categoryId: number): void {
    this.selectedCategory = categoryId; // изменяем выбранную категорию
    this.filterBenefits(); // обновляем фильтрацию
  }

  public filterBenefits(): void {
    // Если выбрана категория "Все" (id 0), показываем все бонусы
    if (this.selectedCategory === 0) {
      this.filteredBenefits = this.benefits;
    } else {
      // Иначе фильтруем бонусы по выбранной категории
      this.filteredBenefits = this.benefits.filter(
        (benefit) => benefit.category === this.selectedCategory,
      );
    }
  }

  public isCategorySelected(category: Categories): boolean {
    return category.id === this.selectedCategory; // проверка активной категории
  }

  public openModal() {
    this.isVisible = true;
  }

  public openEditModal(benefit: any) {
    this.isEditMode = true;
    this.currentBenefitId = benefit.id;

    // Populate the form with benefit details
    this.benefitForm.patchValue({
      name: benefit.name,
      sub_name: benefit.sub_name,
      description: benefit.description,
      company: benefit.company,
      expired_date: benefit.expired_date,
      cost: benefit.cost,
      category: benefit.category,
      photo: benefit.photo,
    });

    this.openModal();
  }

  public closeModal() {
    this.isVisible = false;
  }
}

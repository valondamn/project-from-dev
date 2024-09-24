import {Component, OnInit} from '@angular/core';
import {BenefitsTop, Cards, Categories, User} from '../main/main.interface';
import {LoginService} from "../login/login.service";
import {CategoriesService} from "../../shared/services/categories.service";

@Component({
  selector: 'app-current-benefits',
  templateUrl: './current-benefits.component.html',
  styleUrls: ['./current-benefits.component.scss'],
})
export class CurrentBenefitsComponent implements OnInit {
  userProfile!: User; // Для хранения данных профиля
  public products!: BenefitsTop[];
  public filteredBenefits!: Cards[]; // для фильтрованных бонусов
  public categories!: Categories[];
  public benefits!: Cards[]; // Полный список всех бонусов
  public selectedCategory: number = 0; // "Все" по умолчанию, поэтому 0

  constructor(
    private loginService: LoginService,
    public categoriesService: CategoriesService
  ) {
  }

  ngOnInit(): void {
    this.fetchUserProfile();
    this.getCategories();
  }

  public getCategories(): void {
    this.categoriesService.getCategories().subscribe(
      data => {
        // Добавляем категорию "Все" с id 0
        this.categories = [{id: 0, name: 'Все', description: '', photo: ''}, ...data];
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  public toggleCategory(categoryId: number): void {
    this.selectedCategory = categoryId; // изменяем выбранную категорию
    this.filterBenefits(); // обновляем фильтрацию
  }

  public filterBenefits(): void {
    if (this.userProfile) {
      const userBenefits = this.userProfile.orders.flatMap(order => order.benefits);

      // Если выбрана категория "Все" (id 0), показываем все льготы пользователя
      if (this.selectedCategory === 0) {
        this.filteredBenefits = userBenefits;
      } else {
        // Иначе фильтруем бонусы по выбранной категории
        this.filteredBenefits = userBenefits.filter(benefit =>
          benefit.category === this.selectedCategory
        );
      }
    }
  }

  public isCategorySelected(category: Categories): boolean {
    return category.id === this.selectedCategory; // проверка активной категории
  }

  fetchUserProfile(): void {
    this.loginService.getProfile().subscribe({
      next: (profile: User) => {
        this.userProfile = profile;  // Получаем данные профиля
        this.filterBenefits();  // Фильтруем после загрузки профиля
      },
      error: (err) => {
        console.error('Error fetching user profile:', err);
      }
    });
  }
}

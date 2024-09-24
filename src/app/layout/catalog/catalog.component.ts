import {Component, OnInit} from '@angular/core';
import {BenefitsTop, Cards, Categories} from '../main/main.interface';
import {CatalogService} from "./catalog.service";
import {CategoriesService} from "../../shared/services/categories.service";

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

  constructor(private catalogService: CatalogService,
              public categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.getCatalog();
    this.getCategories();
  }

  public getCatalog(): void {
    this.catalogService.getBenefits().subscribe(
      data => {
        this.benefits = data;
        this.filterBenefits(); // фильтруем при загрузке данных
      },
      error => {
        console.error('Error fetching benefits:', error);
      }
    );
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
    // Если выбрана категория "Все" (id 0), показываем все бонусы
    if (this.selectedCategory === 0) {
      this.filteredBenefits = this.benefits;
    } else {
      // Иначе фильтруем бонусы по выбранной категории
      this.filteredBenefits = this.benefits.filter(benefit =>
        benefit.category === this.selectedCategory
      );
    }
  }

  public isCategorySelected(category: Categories): boolean {
    return category.id === this.selectedCategory; // проверка активной категории
  }
}

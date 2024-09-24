import {Component, OnInit} from '@angular/core';
import {BenefitsTop} from "./main.interface";
import {TopBenefitsService} from "../../shared/services/top-benefits.service";
import {CategoriesService} from "../../shared/services/categories.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public isLoading: boolean = true;


  public topBenefits!: BenefitsTop[]

  public selectedCategory: string = 'Все';


  constructor(public topBenefitsService: TopBenefitsService,
              public categoriesService: CategoriesService) {
  }


  ngOnInit(): void {
    this.getTopBenefits()
  }

  public getTopBenefits() {
    this.isLoading = true;
    this.topBenefitsService.getTopBenefits().subscribe(
      data => {
        this.topBenefits = data;
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching benefits:', error);
        this.isLoading = false;
      }
    );
  }


}

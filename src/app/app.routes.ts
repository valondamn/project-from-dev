import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./layout/main/main.component";
import {CatalogComponent} from "./layout/catalog/catalog.component";
import {CurrentBenefitsComponent} from "./layout/current-benefits/current-benefits.component";
import {QuestionsAndAnswersComponent} from "./layout/questions-and-answers/questions-and-answers.component";


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'current-benefits',
    component: CurrentBenefitsComponent,
  },
  { path: 'questions-and-answers', component: QuestionsAndAnswersComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

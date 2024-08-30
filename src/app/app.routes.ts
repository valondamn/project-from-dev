import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PageComponent} from "./core/components/page/page.component";
import {MainComponent} from "./layout/main/main.component";
import {CurrentBenefitsComponent} from "./layout/current-benefits/current-benefits.component";
import {CatalogComponent} from "./layout/catalog/catalog.component";
import {QuestionsAndAnswersComponent} from "./layout/questions-and-answers/questions-and-answers.component";
import {NotificationsPageComponent} from "./layout/notifications-page/notifications-page.component";
import {WalletComponent} from "./layout/wallet/wallet.component";
import {AccountComponent} from "./layout/account/account.component";


const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children:[
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'current-benefits',
        component: CurrentBenefitsComponent
      },
      {
        path: 'catalog',
        component: CatalogComponent
      },
      {
        path: 'questions-and-answers',
        component: QuestionsAndAnswersComponent
      },
      {
        path: 'notifications',
        component: NotificationsPageComponent
      },
      {
        path: 'wallet',
        component: WalletComponent
      },
      {
        path: 'settings',
        component: AccountComponent
      }
    ]
  },
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

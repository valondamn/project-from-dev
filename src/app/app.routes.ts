import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./layout/main/main.component";
import {CurrentBenefitsComponent} from "./layout/current-benefits/current-benefits.component";
import {CatalogComponent} from "./layout/catalog/catalog.component";
import {QuestionsAndAnswersComponent} from "./layout/questions-and-answers/questions-and-answers.component";
import {NotificationsPageComponent} from "./layout/notifications-page/notifications-page.component";
import {WalletComponent} from "./layout/wallet/wallet.component";
import {AccountComponent} from "./layout/account/account.component";
import {LoginComponent} from "./layout/login/login.component";
import {AuthGuard} from "./shared/guards/auth-guard.guard";
import {LoginGuard} from "./shared/guards/login-guard.guard";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'current-benefits',
    component: CurrentBenefitsComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'catalog',
    component: CatalogComponent,
    canActivate: [AuthGuard]


  },
  {
    path: 'questions-and-answers',
    component: QuestionsAndAnswersComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'notifications',
    component: NotificationsPageComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'wallet',
    component: WalletComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'settings',
    component: AccountComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard] // Добавляем LoginGuard для маршрута логина
  }
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
export class AppRoutingModule {
}

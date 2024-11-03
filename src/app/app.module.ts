import {NgModule} from '@angular/core';
import {BrowserModule,} from '@angular/platform-browser';
import {AppRoutingModule} from "./app.routes";
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MainComponent} from './layout/main/main.component';
import {CurrentBenefitsComponent} from './layout/current-benefits/current-benefits.component';
import {CatalogComponent} from './layout/catalog/catalog.component';
import {QuestionsAndAnswersComponent} from './layout/questions-and-answers/questions-and-answers.component';
import {RouterModule} from '@angular/router';
import {PageComponent} from "./core/components/page/page.component";
import {AngularSvgIconModule} from "angular-svg-icon";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BenefitsCardsComponent} from "./shared/components/benefits-cards/benefits-cards.component";
import {ModalComponent} from "./shared/components/modal/modal.component";
import {AccordionCardComponent} from "./shared/components/accordion-card/accordion-card.component";
import {AuthInterceptor} from "./shared/auth-interceptor.interceptor";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {PrimaryButtonComponent} from "./shared/components/buttons/primary-button/primary-button.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CurrentBenefitsComponent,
    CatalogComponent,
    QuestionsAndAnswersComponent,
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        RouterModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatGridListModule,
        MatMenuModule,
        PageComponent,
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
        BenefitsCardsComponent,
        ModalComponent,
        AccordionCardComponent,
        NgxSkeletonLoaderModule,
        ToastModule,
        ButtonModule,
        PrimaryButtonComponent
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

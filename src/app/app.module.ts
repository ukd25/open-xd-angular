import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginBtnComponent } from './components/navbar/login-btn/login-btn.component';
import { NavCtaComponent } from './components/navbar/nav-cta/nav-cta.component';
import { FirstContainerComponent } from './components/first-container/first-container.component';
import { EligibiltyCalculatorComponent } from './components/first-container/eligibilty-calculator/eligibilty-calculator.component';
import { ImgCardComponent } from './components/first-container/img-card/img-card.component';
import { SecondContainerComponent } from './components/second-container/second-container.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import {MatSelectModule} from '@angular/material/select';
import { CardsComponentComponent } from './components/second-container/cards-component/cards-component.component';
import { CashDisbursementComponent } from './components/second-container/cards-component/cash-disbursement/cash-disbursement.component';
import { InterestRateComponent } from './components/second-container/cards-component/interest-rate/interest-rate.component';
import { PaperworkComponent } from './components/second-container/cards-component/paperwork/paperwork.component';
import { BusinessFinanceComponent } from './components/second-container/cards-component/business-finance/business-finance.component';
import { MedicalCardComponent } from './components/second-container/cards-component/medical-card/medical-card.component';
import { BusinessCtaComponent } from './components/second-container/business-cta/business-cta.component';
import { OpenAccountCtaComponent } from './components/second-container/business-cta/open-account-cta/open-account-cta.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginBtnComponent,
    NavCtaComponent,
    FirstContainerComponent,
    EligibiltyCalculatorComponent,
    ImgCardComponent,
    SecondContainerComponent,
    CardsComponentComponent,
    CashDisbursementComponent,
    InterestRateComponent,
    PaperworkComponent,
    BusinessFinanceComponent,
    MedicalCardComponent,
    BusinessCtaComponent,
    OpenAccountCtaComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

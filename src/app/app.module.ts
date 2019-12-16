import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ContactComponent } from './components/contact/contact.component';
import { SupportComponent } from './components/support/support.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecruitmentComponent } from './components/recruitment/recruitment.component';
import { FeatureComponent } from './components/feature/feature.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ContactComponent,
    SupportComponent,
    FooterComponent,
    RecruitmentComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

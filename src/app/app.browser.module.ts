import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './header/header.component';
import { OwlModule } from 'ngx-owl-carousel';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatSliderModule } from '@angular/material/slider';
import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md';
import { FooterComponent } from './footer/footer.component';
import { AboutModule } from './about/about.module';
import { VideosModule } from './videos/videos.module';
import { HeaderMoreModule } from './header-more/header-more.module';
import { AppModule } from './app.module';


@NgModule({
  imports: [
    
    AppRoutingModule,
    PagesModule,
    HomeModule,
    HttpClientModule,
    CarouselModule,
    OwlModule,
    FormsModule,
    MatSliderModule,
    MDBBootstrapModule,
    DropdownModule,
    BrowserAnimationsModule,
    AboutModule,
    VideosModule,
    HeaderMoreModule,
    AppModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }

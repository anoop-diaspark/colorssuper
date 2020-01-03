import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AdminPagesContentComponent } from './admin-pages/admin-pages-content.component';
import { OwlModule } from 'ngx-owl-carousel';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatSliderModule } from '@angular/material/slider';
import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md';
import { ShowsComponent } from './shows/shows.component';
import { ShowMainpageComponent } from './show-mainpage/show-mainpage.component';

@NgModule({
  declarations: [ AdminPagesContentComponent,ShowsComponent, ShowMainpageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    OwlModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MDBBootstrapModule,
    DropdownModule,
  ]
})
export class PagesModule { }

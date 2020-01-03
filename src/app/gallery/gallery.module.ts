import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryimgComponent } from './galleryimg/galleryimg.component';
import { ColorssuperGalleryimgComponent } from './colorssuper-galleryimg/colorssuper-galleryimg.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatSliderModule } from '@angular/material/slider';
import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [GalleryimgComponent, ColorssuperGalleryimgComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MDBBootstrapModule,
    DropdownModule,
  ]
})
export class GalleryModule { }

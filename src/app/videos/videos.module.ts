import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideoCategoryComponent } from './video-category/video-category.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatSliderModule } from '@angular/material/slider';
import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [VideoCategoryComponent, VideoComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MDBBootstrapModule,
    DropdownModule,
  ]
})
export class VideosModule { }

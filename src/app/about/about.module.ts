import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';

import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryModule } from '../gallery/gallery.module';


@NgModule({
  declarations: [ PrivacyPolicyComponent, TermsOfUseComponent, ContactUsComponent],
  imports: [
    CommonModule,
    GalleryModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }

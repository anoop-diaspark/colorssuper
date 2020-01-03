import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPagesContentComponent } from './admin-pages/admin-pages-content.component';
import { ShowsComponent } from './shows/shows.component';

import { PrivacyPolicyComponent } from '../about/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from '../about/terms-of-use/terms-of-use.component';
import { ContactUsComponent } from '../about/contact-us/contact-us.component';
import { VideoCategoryComponent } from '../videos/video-category/video-category.component';
import { EventsComponent } from '../header-more/events/events.component';
import { SchedulesComponent } from '../header-more/schedules/schedules.component';
import { SocialComponent } from '../header-more/social/social.component';
import { ShowsGuard } from '../shows.guard';
import { GalleryimgComponent } from '../gallery/galleryimg/galleryimg.component';
import { ColorssuperGalleryimgComponent } from '../gallery/colorssuper-galleryimg/colorssuper-galleryimg.component';
import { VideoComponent } from '../videos/video/video.component';
import { ShowMainpageComponent } from './show-mainpage/show-mainpage.component';




const routes: Routes = [
  { path : '',component:AdminPagesContentComponent},
 
  { path : 'shows/:term',component:ShowsComponent,canActivate: [ShowsGuard],data: { 
    role: 'term'
 }},
  { path : ':term/promos',component:VideoCategoryComponent},
  { path : 'gallery',component:ColorssuperGalleryimgComponent},
  { path : 'gallery/:slug',component:GalleryimgComponent},

  { path : 'privacy-policy',component:PrivacyPolicyComponent},
  { path : 'terms-of-use',component:TermsOfUseComponent},
  { path : 'contact-us',component:ContactUsComponent},
  { path : 'events',component:EventsComponent},
  { path : 'schedules',component:SchedulesComponent},
  { path : 'social',component:SocialComponent},
  { path : 'video',component:VideoComponent},
  { path : 'shows',component:ShowMainpageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

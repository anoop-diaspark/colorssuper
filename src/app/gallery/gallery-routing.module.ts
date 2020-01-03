import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryimgComponent } from './galleryimg/galleryimg.component';


const routes: Routes = [
  { path : 'gallery/:slug',component:GalleryimgComponent},
  { path: 'gallery/gallery/:slug', redirectTo: 'gallery/:slug', pathMatch: 'full' },
  { path: 'gallery/:slug/gallery/:slug', redirectTo: 'gallery/:slug', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }

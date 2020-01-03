import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AdminPagesContentComponent } from './pages/admin-pages/admin-pages-content.component';


const routes: Routes = [
  { path : '',component:AdminPagesContentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

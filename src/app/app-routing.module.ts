import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsDetailsComponent } from './blogs-details/blogs-details.component';
import { LocalHomeComponent } from './local-home/local-home.component';

const routes: Routes = [
  {path:'home',component:LocalHomeComponent},
  {path:'details/:id',component:BlogsDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

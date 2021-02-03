import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  { path: 'followings-blogs', component: HomeComponent },
  {
    path: 'author/:userid', component: ProfileComponent,
    children: [
      { path: 'edit-profile', component: ProfileEditComponent }
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'suggestions', component: SuggestionsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchComponent },
  { path: 'blog/:blogid', component: HomeComponent },
  { path: 'create-blog', component: BlogCreateComponent },
  { path: 'edit-blog/:blogid', component: BlogEditComponent },
  {path:'blog-details',component:BlogDetailsComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { FollowingsComponent } from './followings/followings.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'followings-blogs', component: HomeComponent },
  { path: 'author/:authorid', component: ProfileComponent },
  { path: 'author/:authorid/edit-profile', component: EditProfileComponent },
  { path: 'author/:authorid/followers', component: FollowingsComponent },
  { path: 'author/:authorid/followings', component: FollowingsComponent },
  { path: 'followers', component: FollowingsComponent },
  { path: 'followings', component: FollowingsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'suggestions', component: SuggestionsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search/:page', component: SearchComponent },
  { path: 'create-blog', component: BlogCreateComponent },
  { path: 'edit-blog/:blogid', component: BlogEditComponent },
  { path: 'blog-details/:blogid', component: BlogDetailsComponent },
  
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

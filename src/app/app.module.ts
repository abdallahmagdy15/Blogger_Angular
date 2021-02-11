import { AuthInterceptor } from './_services/auth-interceptor';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http'
import {FormsModule, ReactiveFormsModule} from'@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AuthorCardComponent } from './author-card/author-card.component';
import { LoginComponent } from './login/login.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { SearchComponent } from './search/search.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { FollowingsComponent } from './followings/followings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
    SuggestionsComponent,
    AboutComponent,
    NavigationComponent,
    BlogsComponent,
    AuthorCardComponent,
    LoginComponent,
    BlogCardComponent,
    BlogDetailsComponent,
    BlogCreateComponent,
    BlogEditComponent,
    SearchComponent,
    ProfileEditComponent,
    FollowingsComponent,
    CommentCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [ {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }

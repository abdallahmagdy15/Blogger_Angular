import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from'@angular/common/http'
import {FormsModule} from'@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalHomeComponent } from './local-home/local-home.component';
import { BlogsDetailsComponent } from './blogs-details/blogs-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalHomeComponent,
    BlogsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

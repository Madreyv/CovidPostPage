import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'


import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { PostCardComponent } from './views/post-card/post-card.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostScreenComponent } from './views/post-screen/post-screen.component';
import { PostFormComponent } from './views/post-form/post-form.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './views/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchHeaderComponent,
    PostCardComponent,
    SideMenuComponent,
    PostScreenComponent,
    PostFormComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

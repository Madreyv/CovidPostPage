import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'


import { SearchHeaderComponent } from './views/search-header/search-header.component';
import { PostCardComponent } from './views/post-card/post-card.component';
import { SideMenuComponent } from './views/side-menu/side-menu.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostScreenComponent } from './views/post-screen/post-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchHeaderComponent,
    PostCardComponent,
    SideMenuComponent,
    PostScreenComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

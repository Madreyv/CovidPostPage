import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostCardComponent } from './views/post-card/post-card.component';
import { PostScreenComponent } from './views/post-screen/post-screen.component';

const routes:Routes = [
  {
    path:"",
    component:PostCardComponent 
  },
  {
    path:'post/:id',
    component:PostScreenComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

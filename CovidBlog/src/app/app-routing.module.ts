import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostCardComponent } from './views/post-card/post-card.component';
import { PostScreenComponent } from './views/post-screen/post-screen.component';
import { PostFormComponent } from './views/post-form/post-form.component';


const routes:Routes = [
  {
    path:"",
    component:PostCardComponent 
  },
  {
    path:'post/create',
    component:PostFormComponent
  },
  {
    path:'post/:id',
    component:PostScreenComponent
  },
  {
    path:'post/search/:search',
    component:PostCardComponent
  },
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

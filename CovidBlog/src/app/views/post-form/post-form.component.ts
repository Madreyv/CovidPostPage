import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/service/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post : Post = {
    userId:1,
    title:"titulo",
    body:"Corpo"
  }

  constructor(private postService: PostsService, private router: Router) { }

  ngOnInit(): void {
  }

  createPost() : void{
    this.postService.createPost(this.post).subscribe((data) =>{
      alert('Post Criado')
      console.log(data)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/service/posts.service';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  posts : Post[];

  constructor(public postService : PostsService) {

   }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts)
    })
  }

}



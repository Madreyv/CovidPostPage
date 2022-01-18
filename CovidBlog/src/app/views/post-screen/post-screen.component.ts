import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { PostsService } from 'src/app/shared/service/posts.service';
import { Post } from 'src/app/shared/models/post.model';
import { SearchHeaderComponent } from '../search-header/search-header.component';

@Component({
  selector: 'app-post-screen',
  templateUrl: './post-screen.component.html',
  styleUrls: ['./post-screen.component.css']
})
export class PostScreenComponent implements OnInit {
  post:Post

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe(data => {
      this.post = data
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post.model';
import { SearchHeaderModel } from 'src/app/shared/models/searchHeader.model';
import { PostsService } from 'src/app/shared/service/posts.service';
import { SearchService } from 'src/app/shared/service/search.service';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  posts : Post[];
  

  constructor(
    public postService : PostsService,
    private search: SearchService,
  ) { }

  ngOnInit(): void {
      this.getPosts();
  }

  getPosts(){
    if(this.search.searchData.filtered === null){
      this.postService.getPosts().subscribe(data => {
        this.search.searchData.post = data
        this.search.searchData.filtered = data
      })
    }
  }

  get filtered(): Post[]{
    return this.search.searchData.filtered
  }

}



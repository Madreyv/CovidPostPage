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
  public term : SearchHeaderModel = {
    title:'',
    searchData:false,
    post:[],
    filtered:[]
  }

  constructor(
    public postService : PostsService,
    private search: SearchService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const term = this.route.snapshot.paramMap.get('search')
    if(term !== null ){
      this.searchPost(term)
    }else{
      this.getPosts();
    }


  }

  getPosts(){
    this.postService.getPosts().subscribe(data => {
      this.term.post = data
      this.term.filtered = data
      // this.posts = data;
      // console.log(this.posts)
      this.search.searchData = this.term
    })
  }

  searchPost(term:string){
    this.postService.getPosts().subscribe(data => {
      this.posts = data.filter((post) =>{
        return post.title.includes(term)
      })
      this.term.post = this.posts
      this.search.searchData = this.term
    })
  }

  get filtered(): Post[]{
    console.log(this.search.searchData)
    return this.search.searchData.filtered
  }

}



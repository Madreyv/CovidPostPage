import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { PostsService } from 'src/app/shared/service/posts.service';
import { Post } from 'src/app/shared/models/post.model';
import { GlobalService } from 'src/app/shared/service/GlobalService';

@Component({
  selector: 'app-post-screen',
  templateUrl: './post-screen.component.html',
  styleUrls: ['./post-screen.component.css']
})
export class PostScreenComponent implements OnInit {
  post:Post[]

  constructor(
    private route: ActivatedRoute,
    private search: GlobalService
  ) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    //fução baixo utilizada apenas se fosse utilizar a API para carregar um post expecífico. Como a API não adiciona novos post vamos utilizar do nosso serviço global
    // this.postService.getPost(id).subscribe(data => {
    //   this.post = data
    // })

    this.post = this.search.searchData.post.filter((post) => {
      return post.id === id
    })
  }
}

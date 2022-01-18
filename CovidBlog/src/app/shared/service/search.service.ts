import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../models/post.model';
import { SearchHeaderModel } from '../models/searchHeader.model';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _searchData = new BehaviorSubject<SearchHeaderModel>({
    title:'Covid 1',
    searchData: false,
    post:[],
    filtered:[]
    // value: 19
  })
  private posts:Post[]

  constructor(public postService : PostsService) { }

  get searchData(): SearchHeaderModel{
    return this._searchData.value
  }

  set searchData(data:SearchHeaderModel){
    console.log(this.searchData)
    this._searchData.next(data)
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../models/post.model';
import { SearchHeaderModel } from '../models/searchHeader.model';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private _searchData = new BehaviorSubject<SearchHeaderModel>({
    title:'',
    search: false,
    post:[],
    filtered:null
  })
 

  constructor(public postService : PostsService) { }

  get searchData(): SearchHeaderModel{
    return this._searchData.value
  }

  set searchData(data:SearchHeaderModel){
    this._searchData.next(data)
  }
}

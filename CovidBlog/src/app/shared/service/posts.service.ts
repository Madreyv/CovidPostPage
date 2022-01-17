import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  urlBase = 'https://jsonplaceholder.typicode.com/'


  constructor( private http: HttpClient) { }


  public getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.urlBase + 'posts');
  }

  public getPost(id) : Observable<Post>{
    return this.http.get<Post>(`${this.urlBase}posts/${id}`)
  }
}

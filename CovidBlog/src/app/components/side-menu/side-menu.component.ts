import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchHeaderModel } from 'src/app/shared/models/searchHeader.model';
import { GlobalService } from 'src/app/shared/service/GlobalService';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  public term : SearchHeaderModel = {
    title:'',
    search:false,
    post:[],
    filtered:[]
  }
  
  public searchField : string= ''
  constructor(private router : Router, private search: GlobalService) { }

  ngOnInit(): void {
  }

  navigateNewPost(): void{
    this.router.navigate(['/post/create'])
  }

  searchTerm():void{
    this.term = this.search.searchData
    this.term.title = this.searchField
    this.term.search = true
    this.term.filtered = this.search.searchData.post.filter((post)=>{
      return post.title.includes(this.term.title)
    })
    this.search.searchData = this.term
    this.router.navigate(['/'])
  }

}

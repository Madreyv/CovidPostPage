import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchHeaderModel } from 'src/app/shared/models/searchHeader.model';
import { SearchService } from 'src/app/shared/service/search.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  public term : SearchHeaderModel = {
    title:'',
    searchData:false,
    post:[],
    filtered:[]
  }
  
  constructor(private router : Router, private search: SearchService) { }

  ngOnInit(): void {
  }

  navigateNewPost(): void{
    this.router.navigate(['/post/create'])
  }

  searchTerm():void{
    this.term = this.search.searchData
    this.term.filtered = this.search.searchData.post.filter((post)=>{
      return post.title.includes(this.term.title)
    })
    this.search.searchData = this.term

    // this.router.navigate([`/post/search/${this.term.title}`])
  }

}

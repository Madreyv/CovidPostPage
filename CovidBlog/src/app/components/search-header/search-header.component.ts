import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/service/GlobalService';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent implements OnInit {
  
  constructor(private searchService: GlobalService) { 
    
  }

  ngOnInit(): void {
  }

  get title():string{
    return this.searchService.searchData.title
  }

  get numberOfResults(): Number{
    return this.searchService.searchData.filtered.length
  }

  get search(): boolean{
    return this.searchService.searchData.search
  }
}

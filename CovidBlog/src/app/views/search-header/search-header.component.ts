import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/service/search.service';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent implements OnInit {
  searchTerm: string;
  numberOfResults: Number;
  
  constructor(private searchService: SearchService) { 
    this.numberOfResults = 20;
    this.searchTerm = 'Covid 19'
  }

  ngOnInit(): void {
  }

  get title():string{
    return this.searchService.searchData.title
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent implements OnInit {
  searchTerm: string;
  numberOfResults: Number;
  
  constructor() { 
    this.numberOfResults = 20;
    this.searchTerm = 'Covid 19'
  }

  ngOnInit(): void {
  }

}

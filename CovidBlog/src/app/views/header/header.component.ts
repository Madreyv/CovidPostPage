import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/shared/service/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router, private search: SearchService) { }

  ngOnInit(): void {
  }

  goToHome():void{
    let term = this.search.searchData
    term.filtered = term.post
    term.search = false
    this.search.searchData = term
    this.router.navigate(['/'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/service/GlobalService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router, private search: GlobalService) { }

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

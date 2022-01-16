import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  imgURL: string;
  title: string;
  paragraph: string;
  postPagUrl: string
  constructor() {
    this.imgURL = 'https://www2.ufjf.br/progepe/wp-content/uploads/sites/28/2020/03/Covid-19-1024x576.jpg'
    this.title = 'Coronavírus: como a doença é transmitida?'
    this.paragraph = 'Saiba o que é o coronavirus, em quanto tempo a doença pode se manifestar e quais são os principas'
    this.postPagUrl = ''
   }

  ngOnInit(): void {
  }

}

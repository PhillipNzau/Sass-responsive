import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.sass']
})
export class NewsPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  //function to return list of numbers from 0 to n-1
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}

import { Component, OnInit } from '@angular/core';
import {Category} from '../../../../../interfaces/category';
import {BackendService} from '../../../../services/backend.service';

@Component({
  selector: 'app-detailed-news',
  templateUrl: './detailed-news.component.html',
  styleUrls: ['./detailed-news.component.sass']
})
export class DetailedNewsComponent implements OnInit {
  categories: Category[] = [];


  constructor(
    public service: BackendService,
  ) { }

  ngOnInit(): void {
    this.service.getAllCategories()
      .subscribe(categoryResult => {
        this.categories = categoryResult.results;

      });
  }
  // function to return list of numbers from 0 to n-1
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}

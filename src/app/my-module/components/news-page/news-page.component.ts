import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.sass']
})
export class NewsPageComponent implements OnInit {
  blogs = Array();
  categories = Array();

  constructor(
    public service: BackendService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.service.getAllBlogs()
      .subscribe(blogResults => {
        this.blogs = blogResults.results;
        // @ts-ignore
        // this.carName = carResults.results.map(car => car.name);
        console.log('blog image', this.blogs.bg_img);
      });
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

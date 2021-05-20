import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.sass']
})
export class NewsPageComponent implements OnInit {
  blogs = {
    id: undefined,
    bg_img: undefined,
    bg_title: undefined,
    bg_content: undefined,
    bg_author: undefined,
    bg_upload_date: undefined,
    bg_category: undefined,
  };


  constructor(
    public service: BackendService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.service.getAllBlogs()
      .subscribe(blogResults => {
        this.blogs = blogResults.results;

      });
  }

  // function to return list of numbers from 0 to n-1
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}

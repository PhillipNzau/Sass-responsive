import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Router} from '@angular/router';
import {Blog} from '../../../interfaces/blogs';

export interface blogItem {
  id: number,
  bg_img: string,
  bg_title: string,
  bg_content: string,
  bg_author: string,
  bg_upload_date: string,
  bg_category: string
}

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.sass']
})

export class NewsPageComponent implements OnInit {
  // blogs = {
  //   id: '',
  //   bg_img: '',
  //   bg_title: '',
  //   bg_content: '',
  //   bg_author: '',
  //   bg_upload_date: '',
  //   bg_category: '',
  // };

  blogs: Blog[] = [];


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

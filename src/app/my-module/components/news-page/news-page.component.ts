import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.sass']
})
export class NewsPageComponent implements OnInit {
  blogs: [] | undefined;
  // bgImg = [];
  // bgCategory = [];
  // bgTitle = [];
  // bgContent = [];
  // bgDate = [];

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
        // this.bgImg = this.blogs.map(bgImg => bgImg.bg_img);
        // this.bgCategory = blogResults.results.map((bgCat: { bg_category: any; }) => bgCat.bg_category);
        // this.bgTitle = blogResults.results.map((bgTitle: { bg_title: any; }) => bgTitle.bg_title);
        // this.bgContent = blogResults.results.map((bgContent: { bg_content: any; }) => bgContent.bg_content);
        // this.bgDate = blogResults.results.map((bgDate: { bg_upload_date: any; }) => bgDate.bg_upload_date);

        // console.log(this.blogs.bg_img);
      });
  }

  // function to return list of numbers from 0 to n-1
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}

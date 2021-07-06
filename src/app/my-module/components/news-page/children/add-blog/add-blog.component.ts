import { Component, OnInit } from '@angular/core';
import {Blog} from "../../../../../interfaces/blogs";
import {Category} from "../../../../../interfaces/category";
import {BackendService} from "../../../../services/backend.service";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.sass']
})
export class AddBlogComponent implements OnInit {
  categories: Category[] = [];
  blog: Blog[] = [];

  constructor(
    public service: BackendService,

  ) { }

  ngOnInit(): void {
    this.service.getAllCategories()
      .subscribe(categoryResult => {
        this.categories = categoryResult.results;
      });
  }

}

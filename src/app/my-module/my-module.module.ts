import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MyModuleRoutingModule} from './my-module-routing.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NewsPageComponent} from './components/news-page/news-page.component';
import {AppRoutingModule} from '../app-routing.module';
import {MyModuleComponent} from './my-module.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailedNewsComponent } from './components/news-page/children/detailed-news/detailed-news.component';
import { AddBlogComponent } from './components/news-page/children/add-blog/add-blog.component';


@NgModule({
  declarations: [
    MyModuleComponent,
    NavbarComponent,
    NewsPageComponent,
    FooterComponent,
    DetailedNewsComponent,
    AddBlogComponent,
  ],
  imports: [
    CommonModule,
    MyModuleRoutingModule,
    AppRoutingModule
  ]
})
export class MyModuleModule {
}

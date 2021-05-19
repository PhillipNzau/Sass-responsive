import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsPageComponent} from './components/news-page/news-page.component';
import {DetailedNewsComponent} from './components/news-page/children/detailed-news/detailed-news.component';
import {AddBlogComponent} from './components/news-page/children/add-blog/add-blog.component';

const routes: Routes = [
  {path: 'news', component: NewsPageComponent},
  {path: 'detail-news', component: DetailedNewsComponent},
  {path: 'add-blog', component: AddBlogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyModuleRoutingModule { }

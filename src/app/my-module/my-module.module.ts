import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MyModuleRoutingModule} from './my-module-routing.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NewsPageComponent} from './components/news-page/news-page.component';
import {AppRoutingModule} from '../app-routing.module';
import {MyModuleComponent} from './my-module.component';


@NgModule({
  declarations: [
    MyModuleComponent,
    NavbarComponent,
    NewsPageComponent,
  ],
  imports: [
    CommonModule,
    MyModuleRoutingModule,
    AppRoutingModule
  ]
})
export class MyModuleModule {
}

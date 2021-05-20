import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MyModuleRoutingModule} from './my-module/my-module-routing.module';
import {MyModuleModule} from './my-module/my-module.module';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyModuleRoutingModule,
    MyModuleModule,
    NgxScrollTopModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

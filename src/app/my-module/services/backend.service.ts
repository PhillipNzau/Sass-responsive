import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    public http: HttpClient
  ) {}

  getAllBlogs(): Observable<any> {
    return this.http.get<any>(environment.blogBackend);
  }
  getAllCategories(): Observable<any> {
    return this.http.get<any>(environment.blogCategory);
  }
}

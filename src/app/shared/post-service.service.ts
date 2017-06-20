import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable } from 'rxjs/Observable';

@Injectable()
export class PostServiceService {
	private rootUrl="http://jsonplaceholder.typicode.com/posts";

  constructor(private http:Http) { }

  getPost() : Observable<any>{
  	return this.http.get(`${this.rootUrl}`).map(res => res.json());
  }
}

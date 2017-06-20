import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../shared/post-service.service';

@Component({
  selector: 'app-post-controller',
  templateUrl: './post-controller.component.html',
  styleUrls: ['./post-controller.component.css']
})
export class PostControllerComponent implements OnInit {

	posts;
  constructor(private postService:PostServiceService) { }

  ngOnInit() {

  	this.posts=this.postService.getPost().publishReplay().refCount();
  }

}

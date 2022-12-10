import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/model/postModel';

@Component({
  selector: 'app-view-my-posts',
  templateUrl: './view-my-posts.component.html',
  styleUrls: ['./view-my-posts.component.css']
})

export class ViewMyPostsComponent implements OnInit {
  @Input()
  posts:Post[] = [];

  constructor() { } 
  title = 'AngularTraining_Assignment';
  

  getNewlyCreatedPost(post:Post) {
    this.posts.push(post);
    console.log("Title is", post.title);
    console.log("Content is", post.title);
  }
  
  ngOnInit(): void {
  }

}

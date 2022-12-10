import { Component } from '@angular/core';
import { Post } from './model/postModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AngularTraining_Assignment';
  posts: Post[] = [];  

  getNewlyCreatedPost(post:Post) {
    this.posts.push(post);
  }
  
}


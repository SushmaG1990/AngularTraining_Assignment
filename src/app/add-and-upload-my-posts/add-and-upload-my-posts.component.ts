import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/model/postModel';

@Component({
  selector: 'app-add-and-upload-my-posts',
  templateUrl: './add-and-upload-my-posts.component.html',
  styleUrls: ['./add-and-upload-my-posts.component.css']
})

export class AddAndUploadMyPostsComponent implements OnInit {
  visibleAddPost:boolean=false;
  post:Post = new Post();
  
  @Output()
  uploadPosts = new EventEmitter<Post>();
  constructor() {

   }
   
   postHere(){
     this.uploadPosts.emit(this.post);
     console.log("postModel Value is",this.post);
     this.post = new Post();
     this.visibleAddPost = false;     
   }

  addNewPost(){
    console.log(this.post.title);
    this.visibleAddPost = true; 
    console.log(this.visibleAddPost);
  }


  ngOnInit(): void {
  }

}

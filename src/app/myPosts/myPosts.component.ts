import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './myPosts.component.html',
  styleUrls: ['./myPosts.component.css']
})

export class PostComponent implements OnInit {
  @Input()
  postsCount:number = 0;
  
  constructor() { }
    ngOnInit(): void {

  }

}

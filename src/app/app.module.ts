import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAndUploadMyPostsComponent } from './add-and-upload-my-posts/add-and-upload-my-posts.component';
import { ViewMyPostsComponent } from './view-my-posts/view-my-posts.component';
import { PostComponent } from './myPosts/myPosts.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddAndUploadMyPostsComponent,
    ViewMyPostsComponent,   
    AddAndUploadMyPostsComponent,
    PostComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],

  providers: [
  ],
  
  bootstrap: [
    AppComponent
  ]

})

export class AppModule { 
  
}

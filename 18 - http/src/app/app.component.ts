import { PostsService } from './posts.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('postForm') postForm: NgForm;
  loadedPosts: Post[] = [];

  isLoading = false;

  constructor(private http: HttpClient, private pService: PostsService) {}

  ngOnInit() {
    this.pService.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.pService.createAndStorePost(postData);
    this.postForm.reset();
  }

  onFetchPosts() {
    this.pService.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }
}

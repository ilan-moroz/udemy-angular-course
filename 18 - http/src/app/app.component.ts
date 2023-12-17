import { PostsService } from './posts.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from './post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('postForm') postForm: NgForm;
  loadedPosts: Post[] = [];
  isLoading = false;
  error = null;
  private errSub: Subscription;

  constructor(private pService: PostsService) {}

  ngOnInit() {
    this.errSub = this.pService.error.subscribe((errMsg) => {
      this.error = errMsg;
    });
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.pService.createAndStorePost(postData).subscribe((resData) => {
      const newPost = { ...postData, id: resData.name };
      this.loadedPosts = [newPost, ...this.loadedPosts];
      this.postForm.reset();
    });
  }
  // onCreatePost(postData: Post) {
  //   this.pService.createAndStorePost(postData);
  //   this.postForm.reset();
  // }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.pService.deleteAllPosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  private fetchPosts() {
    this.isLoading = true;
    this.pService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
        this.isLoading = false;
      },
      (error) => {
        this.error = error.message;
        console.error(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.errSub.unsubscribe();
  }
}

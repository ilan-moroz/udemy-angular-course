import { PostsService } from './posts.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  error = null;

  constructor(private pService: PostsService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.pService.createAndStorePost(postData).subscribe((resData) => {
      const newPost = { ...postData, id: resData.name };
      this.loadedPosts = [...this.loadedPosts, newPost];
      this.postForm.reset();
    });
  }

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
}

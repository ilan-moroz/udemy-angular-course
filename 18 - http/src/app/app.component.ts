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
  baseUrl =
    'https://anuglar-http-91731-default-rtdb.europe-west1.firebasedatabase.app';
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.http
      .post<{ name: string }>(this.baseUrl + '/posts.json', postData)
      .subscribe((data) => {
        console.log(data);
      });
    this.postForm.reset();
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isLoading = true;
    // Making an HTTP GET request to fetch data
    this.http
      .get<{ [key: string]: Post }>(this.baseUrl + '/posts.json')
      // Using 'pipe' to chain RxJS operators
      .pipe(
        // 'map' is used to transform the incoming data
        map((responseData) => {
          const postsArray: Post[] = [];
          // Iterating over each key in the response object
          for (const key in responseData) {
            // Ensuring the key is a direct property of the response object
            if (responseData.hasOwnProperty(key)) {
              // Pushing a new Post object to the array
              postsArray.push({ ...responseData[key], id: key });
              // Each Post object includes properties from the response and the key as 'id'
            }
          }
          return postsArray; // Returning the array of Post objects
        })
      )
      // Subscribing to the Observable to receive the processed data
      .subscribe((posts) => {
        this.loadedPosts = posts;
        this.isLoading = false;
      });
  }
}

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
  loadedPosts = [];
  baseUrl =
    'https://anuglar-http-91731-default-rtdb.europe-west1.firebasedatabase.app';

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
    // Making an HTTP GET request to fetch data
    this.http
      .get<{ [key: string]: Post }>(this.baseUrl + '/posts.json')
      .pipe(
        // Using 'pipe' to chain RxJS operators
        map((responseData) => {
          // 'map' is used to transform the incoming data
          const postsArray: Post[] = []; // Initializing an array to hold Post objects
          for (const key in responseData) {
            // Iterating over each key in the response object
            if (responseData.hasOwnProperty(key)) {
              // Ensuring the key is a direct property of the response object
              // Pushing a new Post object to the array
              postsArray.push({ ...responseData[key], id: key });
              // Each Post object includes properties from the response and the key as 'id'
            }
          }
          return postsArray; // Returning the array of Post objects
        })
      )
      .subscribe((posts) => {
        // Subscribing to the Observable to receive the processed data
        console.log(posts);
      });
  }
}

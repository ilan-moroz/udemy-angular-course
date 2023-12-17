import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  baseUrl =
    'https://anuglar-http-91731-default-rtdb.europe-west1.firebasedatabase.app';
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  // createAndStorePost(postData: Post) {
  //   return this.http.post<{ name: string }>(
  //     this.baseUrl + '/posts.json',
  //     postData
  //   );
  // }
  createAndStorePost(postData: Post) {
    return this.http
      .post<{ name: string }>(this.baseUrl + '/posts.json', postData)
      .subscribe(
        (resData) => {
          console.log(resData);
        },
        (err) => {
          this.error.next(err.message);
        }
      );
  }

  fetchPosts() {
    // Making an HTTP GET request to fetch data
    return (
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
                postsArray.push({ ...responseData[key], id: key });
              }
            }
            return postsArray; // Returning the array of Post objects
          })
        )
    );
  }

  deleteAllPosts() {
    return this.http.delete(this.baseUrl + '/posts.json');
  }
}

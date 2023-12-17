import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('postForm') postForm: NgForm;
  loadedPosts = [];
  url =
    'https://anuglar-http-91731-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.http.post(this.url + '/posts.json', postData).subscribe((data) => {
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
    this.http.get(this.url + '/posts.json').subscribe((response) => {
      console.log(response);
    });
  }
}

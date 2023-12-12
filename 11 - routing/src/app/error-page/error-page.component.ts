import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css',
})
export class ErrorPageComponent implements OnInit {
  errMsg: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.errMsg = this.route.snapshot.data['msg'];
    this.route.data.subscribe((data: Data) => {
      this.errMsg = data['msg'];
    });
  }
}

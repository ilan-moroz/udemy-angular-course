import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Array to store server elements, initially contains one test server
  serverElements = [
    { type: 'server', name: 'test server', content: 'just a test' },
  ];

  // Method to add a new server element, triggered by the serverCreated event
  onServerAdded(data: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: data.serverName,
      content: data.serverContent,
    });
  }

  // Method to add a new blueprint element, triggered by the blueprintCreated event
  onBlueprintAdded(data: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: data.serverName,
      content: data.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  numbers: number[] = [];

  onNumIncreased(data: { num: number }) {
    this.numbers.push(data.num);
    console.log(this.numbers);
  }
}

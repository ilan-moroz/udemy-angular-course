import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  startNum = 0;
  interval;

  @Output() numIncreased = new EventEmitter<{
    num: number;
  }>();

  startGame() {
    this.interval = setInterval(() => {
      this.startNum += 1;
      this.numIncreased.emit({ num: this.startNum });
      // console.log(this.startNum);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }
}

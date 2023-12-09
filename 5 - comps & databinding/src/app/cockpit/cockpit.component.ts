import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  // EventEmitter for creating a new server, emits an object with server data
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // EventEmitter for creating a blueprint, emits an object with blueprint data
  // 'bpCreated' is an alias used when emitting the event
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // newServerName = ''; // Binds to input for the server's name
  newServerContent = ''; // Binds to input for the server's content

  // Method to emit the serverCreated event with the current server data
  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.newServerContent,
    });
    console.log(serverName.value);
  }

  // Method to emit the blueprintCreated event with the current blueprint data
  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: this.newServerContent,
    });
  }
}

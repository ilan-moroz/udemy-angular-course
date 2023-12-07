import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer = false;
  serverStatus = 'No server was created';
  serverName = '';
  userName = '';
  userStatus = '';
  isEmpty = true;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverStatus = 'Server was created! Name is: ' + this.serverName;
  }

  onCreateUser() {
    this.userStatus = `Your user was created! The username is: ${this.userName}`;
    this.userName = '';
  }

  setIsEmpty() {
    this.isEmpty = false;
  }

  onUpdateServerName(e: any) {
    this.serverName = e.target.value;
  }
}

import { AccountsService } from './../services/accounts.service';
import { Component } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService],
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert('New Account Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // console.log('A server status changed, new status: ' + accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}

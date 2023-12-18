import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { DataStorageService } from './../../services/data-storage.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  private userSub: Subscription;
  isAuth = false;

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuth = !!user;
    });
  }

  onSaveData() {
    this.dataStorageService.saveRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}

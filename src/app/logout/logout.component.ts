// logout.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent {
  constructor(private authService: AuthService) {}

  logout(username: string, password: string) {
    this.authService.logout;
  }
}

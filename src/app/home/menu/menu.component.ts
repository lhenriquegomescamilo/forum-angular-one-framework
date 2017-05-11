import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/auth/auth.service";
import * as _ from "lodash";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private _showNavBar: boolean = false;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._authService
      .showNavBar
      .subscribe((canShow: boolean) => {
        if (canShow !== null) {
          this._showNavBar = canShow;
        }
      })
  }

  isAuth(): boolean {
    return this._authService.haveUserOnSession;
  }

  get showNavBar(): boolean {
    return this._showNavBar;
  }

  onLogout(): void {
    this._authService.logout();
  }
}

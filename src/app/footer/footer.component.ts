import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/auth/auth.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _showFooter: boolean = false;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._authService.showNavBar.subscribe((canShow: boolean) => {
      if (canShow !== null) {
        this._showFooter = canShow;
      }
    });
  }

  get showFooter(): boolean {
    return this._showFooter;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "app/auth/auth.service";
import { EmailValidatorUtil } from "app/utils/validators/email-validator.util";
import { ContactsModel } from "app/models/contacts.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  error: boolean = false;
  errorMessage: string = "";

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService) { }

  ngOnInit() {
    this.form = this._formBuilder
      .group({
        email: ['', [Validators.required, EmailValidatorUtil.email]],
        password: ['', Validators.required]
      });
  }
  onSignin() {
    let contact: ContactsModel = new ContactsModel(this.form.value.email, this.form.value.password);
    this._authService.signin(contact);
  }
}

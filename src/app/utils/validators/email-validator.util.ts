import { FormControl } from "@angular/forms/forms";

export class EmailValidatorUtil {
    constructor() {
        throw new Error("EmailValidator Can't be instantiate");
    }
    public static email(control: FormControl): any {
        let EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return EMAIL_REGEX.test(control.value) ? null : { validateEmail : {valid : false}};
     }
}
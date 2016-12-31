import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.html',
    styleUrls: ['login.css']
})

export class LoginComponent {

    @ViewChild('formLoginData') formLoginData;
    formLogin: FormGroup;
    messageLogin: string;
    user: UserModel;

    constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
        this.messageLogin = "none";
        this.user = new UserModel();
        this.formLogin = this.fb.group({
            'email': [this.user.email, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')]],
            'password': [this.user.password, [Validators.required, Validators.minLength(5)]]
        });
    }

    login() {
        this.authenticationService.login(this.formLoginData.value).subscribe(
            data => {
                if(!!data.error) {
                    this.messageLogin = "block";
                } else {
                    sessionStorage.setItem("token", data.token);
                    sessionStorage.setItem("id", data.id);
                    this.router.navigate(['account']);
                }
            },
            error => console.log(error)
        );
    }
}
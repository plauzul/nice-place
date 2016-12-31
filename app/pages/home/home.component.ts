import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.html',
    styleUrls: ['home.css']
})

export class HomeComponent {

    @ViewChild('modalLogin') modalLogin;
    @ViewChild('formLoginData') formLoginData;
    user: UserModel;
    formLogin: FormGroup;
    formCadastro: FormGroup;
    messageLogin: string;
    messageCadastro: string;

    constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
        this.messageLogin = "none";
        this.messageCadastro = "none";
        this.user = new UserModel();
        this.formLogin = this.fb.group({
            'email': [this.user.email, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')]],
            'password': [this.user.password, [Validators.required, Validators.minLength(5)]]
        });
        this.formCadastro = this.fb.group({
            'first_name': [this.user.first_name, Validators.required],
            'last_name': [this.user.last_name, Validators.required],
            'email': [this.user.email, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')]],
            'password': [this.user.password, [Validators.required, Validators.minLength(5)]],
            'sex': [this.user.sex, Validators.required]
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
                    this.modalLogin.hide();
                    this.router.navigate(['account']);
                }
            },
            error => console.log(error)
        );
    }

    cadastro() {
        this.authenticationService.cadastrar(this.formCadastro.value).subscribe(
            data => {
                if(data.status) {
                    this.messageCadastro = "block";
                }
            },
            error => console.log(error)
        )
    }
}
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UserModel } from '../models/user.model';
import { BaseService } from './base.service';

@Injectable()

export class AuthenticationService extends BaseService {

    constructor(private http: Http) {
        super();
    }

    login(user: UserModel) {
        return this.http.post(this.urlApi + "authenticate", this.jsonToQueryString(user), this.addHeaders())
                        .map(this.extrairDados)
                        .catch(this.processarErros);
    }

    cadastrar(user: UserModel) {
        return this.http.post(this.urlApi + "register", this.jsonToQueryString(user), this.addHeaders())
                        .map(this.extrairDados)
                        .catch(this.processarErros);
    }

    logout() {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("id");
    }
  
}
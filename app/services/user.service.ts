import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserModel } from '../models/user.model';
import { BaseService } from './base.service';

@Injectable()

export class UserService extends BaseService {

	constructor(private http: Http) {
		super();
	}

	getAll() {
		return this.http.get(this.urlApi + "user")
						.map(this.extrairDados)
						.catch(this.processarErros);
	}

	getById(id: string) {
		return this.http.get(this.urlApi + "user/" + id)
						.map(this.extrairDados)
						.catch(this.processarErros);
	}
  
}
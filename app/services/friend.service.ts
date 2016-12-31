import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserModel } from '../models/user.model';
import { BaseService } from './base.service';

@Injectable()

export class FriendService extends BaseService {

	constructor(private http: Http) {
		super();
	}

	getAll(id: string) {
		return this.http.get(this.urlApi + "friend/" + id)
						.map(this.extrairDados)
						.catch(this.processarErros);
	}
  
}
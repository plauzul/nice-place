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

	addFriend(id_user: number, id_friend: number) {
		return this.http.post(this.urlApi + "friend?", this.jsonToQueryString({id_user: id_user, id_friend: id_friend, situation: 'P'}), this.addHeadersForApi())
						.map(this.extrairDados)
						.catch(this.processarErros);
	}
  
}
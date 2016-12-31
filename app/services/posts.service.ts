import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserModel } from '../models/user.model';
import { PostModel } from '../models/post.model';
import { BaseService } from './base.service';

@Injectable()

export class PostsService extends BaseService {

	constructor(private http: Http) {
		super();
	}

	getAll() {
		return this.http.get(this.urlApi + "post")
						.map(this.extrairDados)
						.catch(this.processarErros);
	}

	getAllWithMyFriends(id: string) {
		return this.http.get(this.urlApi + "post/" + id)
						.map(this.extrairDados)
						.catch(this.processarErros);
	}

	setPost(post: PostModel) {
		return this.http.post(this.urlApi + "post", this.jsonToQueryString(post))
						.map(this.extrairDados)
						.catch(this.processarErros);
	}
}
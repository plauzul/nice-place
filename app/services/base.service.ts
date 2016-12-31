import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class BaseService {

    protected urlApi: string = "http://localhost/nice-place-api/public/api/";

    protected extrairDados(res: Response) {
        let data = res.json();
        return data || {};
    }

    protected processarErros(error: any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }

    protected jsonToQueryString(json) {
        return Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
        }).join('&');
    }

    protected addHeaders() {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        return options;
    }

    protected addHeadersForApi() {
        let headers = new Headers({ 'Authorization': `Bearer ${sessionStorage.getItem('token')}` });
        let options = new RequestOptions({ headers: headers });

        return options;
    }

}
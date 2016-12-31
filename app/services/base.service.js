"use strict";
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var BaseService = (function () {
    function BaseService() {
        this.urlApi = "http://localhost/nice-place-api/public/api/";
    }
    BaseService.prototype.extrairDados = function (res) {
        var data = res.json();
        return data || {};
    };
    BaseService.prototype.processarErros = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable_1.Observable.throw(errMsg);
    };
    BaseService.prototype.jsonToQueryString = function (json) {
        return Object.keys(json).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
        }).join('&');
    };
    BaseService.prototype.addHeaders = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    BaseService.prototype.addHeadersForApi = function () {
        var headers = new http_1.Headers({ 'Authorization': "Bearer " + sessionStorage.getItem('token') });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map
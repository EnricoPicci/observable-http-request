"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const observable_http_request_1 = require("./observable-http-request");
const observable_http_request_2 = require("./observable-http-request");
const observable_http_request_3 = require("./observable-http-request");
const observable_http_request_4 = require("./observable-http-request");
const observable_http_request_5 = require("./observable-http-request");
describe('httpGetRequestObs function', () => {
    it('issues an http get request to wikipedia - returns an observable', done => {
        const uri = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=pentole&namespace=0&limit=10';
        let serviceCallResult;
        observable_http_request_1.httpGetRequestObs(uri).subscribe(data => serviceCallResult = data, error => {
            console.error(error);
            done(error);
        }, () => {
            if (serviceCallResult.length > 0) {
                return done();
            }
            else {
                console.error(serviceCallResult);
                return done(new Error('serviceCallResult empty'));
            }
        });
    }).timeout(10000);
});
describe('httpPostRequestObs function', () => {
    it('issues an http post request to https://reqres.in/ - returns an observable', done => {
        const uri = 'https://reqres.in/api/users';
        const name = 'John';
        const job = 'dev';
        const user = { name, job };
        let serviceCallResult;
        observable_http_request_2.httpPostRequestObs(uri, user).subscribe(data => serviceCallResult = data, error => {
            console.error(error);
            done(error);
        }, () => {
            if (serviceCallResult.name === name && serviceCallResult.job === job) {
                return done();
            }
            else {
                console.error(serviceCallResult);
                return done(new Error('serviceCallResult empty'));
            }
        });
    }).timeout(20000);
});
describe('httpPutRequestObs function', () => {
    it('issues an http put request to https://reqres.in/ - returns an observable', done => {
        const uri = 'https://reqres.in/api/users/2';
        const name = 'John';
        const job = 'dev';
        const user = { name, job };
        let serviceCallResult;
        observable_http_request_3.httpPutRequestObs(uri, user).subscribe(data => serviceCallResult = data, error => {
            console.error(error);
            done(error);
        }, () => {
            if (serviceCallResult.name === name && serviceCallResult.job === job) {
                return done();
            }
            else {
                console.error(serviceCallResult);
                return done(new Error('serviceCallResult empty'));
            }
        });
    }).timeout(20000);
});
describe('httpPatchRequestObs function', () => {
    it('issues an http patch request to https://reqres.in/ - returns an observable', done => {
        const uri = 'https://reqres.in/api/users/2';
        const name = 'John';
        const job = 'dev';
        const user = { name, job };
        let serviceCallResult;
        observable_http_request_4.httpPatchRequestObs(uri, user).subscribe(data => serviceCallResult = data, error => {
            console.error(error);
            done(error);
        }, () => {
            if (serviceCallResult.name === name && serviceCallResult.job === job) {
                return done();
            }
            else {
                console.error(serviceCallResult);
                return done(new Error('serviceCallResult empty'));
            }
        });
    }).timeout(20000);
});
describe('httpDeleteRequestObs function', () => {
    it('issues an http delete request to https://reqres.in/ - returns an observable', done => {
        const uri = 'https://reqres.in/api/users/2';
        const name = 'John';
        const job = 'dev';
        const user = { name, job };
        let serviceCallResult;
        observable_http_request_5.httpDeleteRequestObs(uri, user).subscribe(data => serviceCallResult = data, error => {
            console.error(error);
            done(error);
        }, () => {
            if (serviceCallResult.response.statusCode === 204) {
                return done();
            }
            else {
                console.error(serviceCallResult);
                return done(new Error('status code expected is 204 and not ' + serviceCallResult));
            }
        });
    }).timeout(20000);
});
//# sourceMappingURL=observable-http-request.spec.js.map
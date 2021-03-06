
import 'mocha';

import {map} from 'rxjs/operators';
import {httpGetRequestObs} from './observable-http-request';
import {httpPostRequestObs} from './observable-http-request';
import {httpPutRequestObs} from './observable-http-request';
import {httpPatchRequestObs} from './observable-http-request';
import {httpDeleteRequestObs} from './observable-http-request';
import request = require('request');

describe('httpGetRequestObs function', () => {
    
    it('issues an http get request to wikipedia - returns an observable', done => {
        const uri = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=pentole&namespace=0&limit=10';
        let serviceCallResult;
        httpGetRequestObs(uri).pipe(map((res: request.Response) => res.body)).subscribe(
            data => serviceCallResult = data,
            error => {
                console.error(error);
                done(error);
            },
            () => {
                if (serviceCallResult.length > 0) {
                    return done()
                } else {
                    console.error(serviceCallResult);
                    return done(new Error('serviceCallResult empty'));
                }
            }
        )
    }).timeout(10000);

});

describe('httpPostRequestObs function', () => {
    
    it('issues an http post request to https://reqres.in/ - returns an observable', done => {
        const uri = 'https://reqres.in/api/users';
        const name = 'John';
        const job = 'dev';
        const user = {name, job};
        let serviceCallResult;
        httpPostRequestObs(uri, user).pipe(map((res: request.Response) => res.body)).subscribe(
            data => serviceCallResult = data,
            error => {
                console.error(error);
                done(error);
            },
            () => {
                if (serviceCallResult.name === name && serviceCallResult.job === job) {
                    return done()
                } else {
                    console.error(serviceCallResult);
                    return done(new Error('serviceCallResult empty'));
                }
            }
        )
    }).timeout(20000);

});


describe('httpPutRequestObs function', () => {
    
    it('issues an http put request to https://reqres.in/ - returns an observable', done => {
        const uri = 'https://reqres.in/api/users/2';
        const name = 'John';
        const job = 'dev';
        const user = {name, job};
        let serviceCallResult;
        httpPutRequestObs(uri, user).pipe(map((res: request.Response) => res.body)).subscribe(
            data => serviceCallResult = data,
            error => {
                console.error(error);
                done(error);
            },
            () => {
                if (serviceCallResult.name === name && serviceCallResult.job === job) {
                    return done()
                } else {
                    console.error(serviceCallResult);
                    return done(new Error('serviceCallResult empty'));
                }
            }
        )
    }).timeout(20000);

});


describe('httpPatchRequestObs function', () => {
    
    it('issues an http patch request to https://reqres.in/ - returns an observable', done => {
        const uri = 'https://reqres.in/api/users/2';
        const name = 'John';
        const job = 'dev';
        const user = {name, job};
        let serviceCallResult;
        httpPatchRequestObs(uri, user).pipe(map((res: request.Response) => res.body)).subscribe(
            data => serviceCallResult = data,
            error => {
                console.error(error);
                done(error);
            },
            () => {
                if (serviceCallResult.name === name && serviceCallResult.job === job) {
                    return done()
                } else {
                    console.error(serviceCallResult);
                    return done(new Error('serviceCallResult empty'));
                }
            }
        )
    }).timeout(20000);

});


describe('httpDeleteRequestObs function', () => {
    
    it('issues an http delete request to https://reqres.in/ - returns an observable', done => {
        const uri = 'https://reqres.in/api/users/2';
        const name = 'John';
        const job = 'dev';
        const user = {name, job};
        let response;
        httpDeleteRequestObs(uri, user).subscribe(
            data => response = data,
            error => {
                console.error(error);
                done(error);
            },
            () => {
                if (response.statusCode === 204) {
                    return done()
                } else {
                    console.error(response);
                    return done(new Error('status code expected is 204 and not ' + response));
                }
            }
        )
    }).timeout(20000);

});

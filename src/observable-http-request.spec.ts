
import 'mocha';

import {httpGetRequestObs, httpPostRequestObs} from './observable-http-request';

describe('httpGetRequestObs function', () => {
    
    it('issues an http get request to wikipedia - returns an observable', done => {
        const uri = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=pentole&namespace=0&limit=10';
        let serviceCallResult;
        httpGetRequestObs(uri).subscribe(
            data => serviceCallResult = data,
            error => console.error(error),
            () => {
                if (serviceCallResult.length > 0) {
                    return done()
                } else {
                    console.error(serviceCallResult);
                    return done(new Error('serviceCallResult empty'));
                }
            }
        )
    });

});

describe('httpPostRequestObs function', () => {
    
    it('issues an http post request to https://reqres.in/ - returns an observable', done => {
        const uri = 'https://reqres.in/api/users';
        const name = 'John';
        const job = 'dev';
        const user = {name, job};
        let serviceCallResult;
        httpPostRequestObs(uri, user).subscribe(
            data => serviceCallResult = data,
            error => console.error(error),
            () => {
                if (serviceCallResult.name === name && serviceCallResult.job === job) {
                    return done()
                } else {
                    console.error(serviceCallResult);
                    return done(new Error('serviceCallResult empty'));
                }
            }
        )
    });

});

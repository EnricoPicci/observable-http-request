
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/bindNodeCallback';
import * as request from 'request';


// ============================ http GET ================================
// Returns an Observable which emits when the data is ready
export function httpGetRequestObs(uri: string) {
    return requestGetObs(uri, { json: true });
}
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestGetFunction = (uri: string, 
                            options: {}, 
                            callback: (err: Error, _res, body) => void) => request.get(uri, options, callback);
const requestGetObs = Observable.bindNodeCallback(requestGetFunction, toBodyOnly);


// ============================ http POST ================================
// Returns an Observable which emits when the data is ready
export function httpPostRequestObs(uri: string, body: any) {
    return requestPostObs(uri, { json: true, body});
}
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestPostFunction = (uri: string, 
                            options: any, 
                            callback: (err: Error, _res, body) => void) => request.post(uri, options, callback);
const requestPostObs = Observable.bindNodeCallback(requestPostFunction, toBodyOnly);



function toBodyOnly(_res, _body) {
    return _body;
}

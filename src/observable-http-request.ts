
import { bindNodeCallback } from 'rxjs'
import * as request from 'request';

// ============================ http GET ================================
// Returns an Observable which emits when the data is ready
export function httpGetRequestObs(uri: string) {
    return requestGetObs(uri, { json: true });
}
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestGetFunction = (uri: string, 
                            options: {}, 
                            callback: (err, _res: request.Response, body) => void) => request.get(uri, options, callback);
const requestGetObs = bindNodeCallback(requestGetFunction, toBodyOnly);


// ============================ http POST ================================
// Returns an Observable which emits when the operation is completed and the response returned
export function httpPostRequestObs(uri: string, body: any, headers?: any) {
    return headers ? requestPostObs(uri, { json: true, body, headers}, ) : requestPostObs(uri, { json: true, body});
}
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestPostFunction = (uri: string, 
                            options: any, 
                            callback: (err, _res: request.Response, body) => void) => request.post(uri, options, callback);
const requestPostObs = bindNodeCallback(requestPostFunction, toBodyOnly);



// ============================ http PUT ================================
// Returns an Observable which emits when the operation is completed and the response returned
export function httpPutRequestObs(uri: string, body: any) {
    return requestPutObs(uri, { json: true, body});
}
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestPutFunction = (uri: string, 
                            options: any, 
                            callback: (err, _res: request.Response, body) => void) => request.put(uri, options, callback);
const requestPutObs = bindNodeCallback(requestPutFunction, toBodyOnly);



// ============================ http PATCH ================================
// Returns an Observable which emits when the operation is completed and the response returned
export function httpPatchRequestObs(uri: string, body: any) {
    return requestPatchObs(uri, { json: true, body});
}
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestPatchFunction = (uri: string, 
                            options: any, 
                            callback: (err, _res: request.Response, body) => void) => request.patch(uri, options, callback);
const requestPatchObs = bindNodeCallback(requestPatchFunction, toBodyOnly);



// ============================ http DELETE ================================
// Returns an Observable which emits when the operation is completed and the response returned
export function httpDeleteRequestObs(uri: string, body: any) {
    return requestDeleteObs(uri, { json: true, body});
}
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestDeleteFunction = (uri: string, 
                            options: any, 
                            callback: (err, _res: request.Response, body) => void) => request.delete(uri, options, callback);
const requestDeleteObs = bindNodeCallback(requestDeleteFunction, toResponseAndBody);


function toBodyOnly(_res: request.Response, body) {
    return body;
}
function toResponseAndBody(response: request.Response, body) {
    return {response, body};
}

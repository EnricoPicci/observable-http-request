"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const request = require("request");
// ============================ http GET ================================
// Returns an Observable which emits when the data is ready
function httpGetRequestObs(uri, authToken) {
    return httpRequestObs(uri, {}, request.post, authToken);
}
exports.httpGetRequestObs = httpGetRequestObs;
// ============================ http POST ================================
// Returns an Observable which emits the response received asnd then completes
function httpPostRequestObs(uri, body, authToken) {
    return httpRequestObs(uri, body, request.post, authToken);
}
exports.httpPostRequestObs = httpPostRequestObs;
// ============================ http PUT ================================
// Returns an Observable which emits when the operation is completed and the response returned
function httpPutRequestObs(uri, body, authToken) {
    return httpRequestObs(uri, body, request.put, authToken);
}
exports.httpPutRequestObs = httpPutRequestObs;
// ============================ http PATCH ================================
// Returns an Observable which emits when the operation is completed and the response returned
function httpPatchRequestObs(uri, body, authToken) {
    return httpRequestObs(uri, body, request.patch, authToken);
}
exports.httpPatchRequestObs = httpPatchRequestObs;
// ============================ http DELETE ================================
// Returns an Observable which emits when the operation is completed and the response returned
function httpDeleteRequestObs(uri, body, authToken) {
    return httpRequestObs(uri, body, request.delete, authToken);
}
exports.httpDeleteRequestObs = httpDeleteRequestObs;
function httpRequestObs(uri, body, operationFunction, authToken) {
    const options = { json: true, body };
    if (authToken) {
        options.auth = {
            bearer: authToken
        };
    }
    return rxjs_1.Observable.create((observer) => {
        operationFunction(uri, options, (err, resp) => {
            if (err) {
                observer.error(err);
                return;
            }
            observer.next(resp);
            observer.complete();
        });
    });
}
//# sourceMappingURL=observable-http-request.js.map
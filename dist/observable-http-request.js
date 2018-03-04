"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/bindNodeCallback");
const request = require("request");
// ============================ http GET ================================
// Returns an Observable which emits when the data is ready
function httpGetRequestObs(uri) {
    return requestGetObs(uri, { json: true });
}
exports.httpGetRequestObs = httpGetRequestObs;
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestGetFunction = (uri, options, callback) => request.get(uri, options, callback);
const requestGetObs = Observable_1.Observable.bindNodeCallback(requestGetFunction, toBodyOnly);
// ============================ http POST ================================
// Returns an Observable which emits when the operation is completed and the response returned
function httpPostRequestObs(uri, body) {
    return requestPostObs(uri, { json: true, body });
}
exports.httpPostRequestObs = httpPostRequestObs;
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestPostFunction = (uri, options, callback) => request.post(uri, options, callback);
const requestPostObs = Observable_1.Observable.bindNodeCallback(requestPostFunction, toBodyOnly);
// ============================ http PUT ================================
// Returns an Observable which emits when the operation is completed and the response returned
function httpPutRequestObs(uri, body) {
    return requestPutObs(uri, { json: true, body });
}
exports.httpPutRequestObs = httpPutRequestObs;
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestPutFunction = (uri, options, callback) => request.put(uri, options, callback);
const requestPutObs = Observable_1.Observable.bindNodeCallback(requestPutFunction, toBodyOnly);
// ============================ http PATCH ================================
// Returns an Observable which emits when the operation is completed and the response returned
function httpPatchRequestObs(uri, body) {
    return requestPatchObs(uri, { json: true, body });
}
exports.httpPatchRequestObs = httpPatchRequestObs;
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestPatchFunction = (uri, options, callback) => request.patch(uri, options, callback);
const requestPatchObs = Observable_1.Observable.bindNodeCallback(requestPatchFunction, toBodyOnly);
// ============================ http DELETE ================================
// Returns an Observable which emits when the operation is completed and the response returned
function httpDeleteRequestObs(uri, body) {
    return requestDeleteObs(uri, { json: true, body });
}
exports.httpDeleteRequestObs = httpDeleteRequestObs;
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestDeleteFunction = (uri, options, callback) => request.delete(uri, options, callback);
const requestDeleteObs = Observable_1.Observable.bindNodeCallback(requestDeleteFunction, toResponseAndBody);
function toBodyOnly(_res, body) {
    return body;
}
function toResponseAndBody(response, body) {
    return { response, body };
}
//# sourceMappingURL=observable-http-request.js.map
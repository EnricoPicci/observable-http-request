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
// Returns an Observable which emits when the data is ready
function httpPostRequestObs(uri, body) {
    return requestPostObs(uri, { json: true, body });
}
exports.httpPostRequestObs = httpPostRequestObs;
// https://stackoverflow.com/questions/43462628/cannot-create-observable-from-observable-bindnodecallbackfs-readfile-in-typesc
const requestPostFunction = (uri, options, callback) => request.post(uri, options, callback);
const requestPostObs = Observable_1.Observable.bindNodeCallback(requestPostFunction, toBodyOnly);
function toBodyOnly(_res, _body) {
    return _body;
}
//# sourceMappingURL=observable-http-request.js.map
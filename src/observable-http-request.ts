
import { Observable, Observer, TeardownLogic } from 'rxjs'
import * as request from 'request';

// ============================ http GET ================================
// Returns an Observable which emits when the data is ready
export function httpGetRequestObs(uri: string, authToken?: string) {
    return httpRequestObs(uri, {}, request.post, authToken);
}


// ============================ http POST ================================
// Returns an Observable which emits the response received asnd then completes
export function httpPostRequestObs(uri: string, body: any, authToken?: string): Observable<any> {
    return httpRequestObs(uri, body, request.post, authToken);
}



// ============================ http PUT ================================
// Returns an Observable which emits when the operation is completed and the response returned
export function httpPutRequestObs(uri: string, body: any, authToken?: string) {
    return httpRequestObs(uri, body, request.put, authToken);
}



// ============================ http PATCH ================================
// Returns an Observable which emits when the operation is completed and the response returned
export function httpPatchRequestObs(uri: string, body: any, authToken?: string) {
    return httpRequestObs(uri, body, request.patch, authToken);
}


// ============================ http DELETE ================================
// Returns an Observable which emits when the operation is completed and the response returned
export function httpDeleteRequestObs(uri: string, body: any, authToken?: string) {
    return httpRequestObs(uri, body, request.delete, authToken);
}


function httpRequestObs(
    uri: string, 
    body: any, 
    operationFunction: (uri: string, options?: request.CoreOptions, callback?: request.RequestCallback) => void, 
    authToken?: string
): Observable<request.Response> {
    const options: request.CoreOptions = { json: true, body };
    if (authToken) {
      options.auth = {
        bearer: authToken
      };
    }
    return Observable.create(
      (observer: Observer<any>): TeardownLogic => {
        operationFunction(uri, options, (err, resp) => {
          if (err) {
            observer.error(err);
            return;
          }
          observer.next(resp);
          observer.complete();
        });
      }
    );
}
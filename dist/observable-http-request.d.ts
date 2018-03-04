/// <reference types="request" />
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/bindNodeCallback';
import * as request from 'request';
export declare function httpGetRequestObs(uri: string): Observable<any>;
export declare function httpPostRequestObs(uri: string, body: any): Observable<any>;
export declare function httpPutRequestObs(uri: string, body: any): Observable<any>;
export declare function httpPatchRequestObs(uri: string, body: any): Observable<any>;
export declare function httpDeleteRequestObs(uri: string, body: any): Observable<{
    response: request.Response;
    body: any;
}>;

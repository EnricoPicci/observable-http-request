import { Observable } from 'rxjs';
import * as request from 'request';
export declare function httpGetRequestObs(uri: string, authToken?: string): Observable<request.Response>;
export declare function httpPostRequestObs(uri: string, body: any, authToken?: string): Observable<any>;
export declare function httpPutRequestObs(uri: string, body: any, authToken?: string): Observable<request.Response>;
export declare function httpPatchRequestObs(uri: string, body: any, authToken?: string): Observable<request.Response>;
export declare function httpDeleteRequestObs(uri: string, body: any, authToken?: string): Observable<request.Response>;

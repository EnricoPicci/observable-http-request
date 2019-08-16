import { Observable } from 'rxjs';
export declare function httpGetRequestObs(uri: string, authToken?: string): Observable<any>;
export declare function httpPostRequestObs(uri: string, body: any, authToken?: string): Observable<any>;
export declare function httpPutRequestObs(uri: string, body: any, authToken?: string): Observable<any>;
export declare function httpPatchRequestObs(uri: string, body: any, authToken?: string): Observable<any>;
export declare function httpDeleteRequestObs(uri: string, body: any, authToken?: string): Observable<any>;

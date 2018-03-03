import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/bindNodeCallback';
export declare function httpGetRequestObs(uri: string): Observable<any>;
export declare function httpPostRequestObs(uri: string, body: any): Observable<any>;

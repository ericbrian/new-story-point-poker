import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { }

    getRoomNames() {
        return this._http.get(`${environment.backendUrl}/api/getRoomNames`);
    }
    getDeckNames() {
        const x = this._http.get(`${environment.backendUrl}/api/getDeckNames`);
        console.log(x)
        return x;
    }
}

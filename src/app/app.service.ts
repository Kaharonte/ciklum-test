import { Injectable } from '@angular/core';
import { Headers, Response, Jsonp } from '@angular/http';

import 'rxjs/add/operator/map';

import {Observable} from "rxjs/Observable";

@Injectable()
export class AppService {
    private dataUrl = "https://media.lottoland.com/api/drawings/euroJackpot";

    constructor(private jsonp:Jsonp) {}

    getData() {
        return this.jsonp.get(this.dataUrl+'?callback=JSONP_CALLBACK')
                .map(response => response.json());
    }

}
import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Card } from '../models/card.model';




@Injectable()
export class CardService extends BaseService<Card> {

    serviceName = 'cards/';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}

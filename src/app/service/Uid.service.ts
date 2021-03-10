import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable()

export class UidService {
    uid: any = ''
    constructor() { this.uid = UUID.UUID(); }
    getID() {
        this.uid = UUID.UUID();
    }
}

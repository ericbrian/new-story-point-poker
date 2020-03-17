import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class PokerService {

    constructor(private socket: Socket) { }

    joinRoom(name, room) {
        this.socket.emit('join', { name, room });
    }
}

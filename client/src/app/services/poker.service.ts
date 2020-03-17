import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class PokerService {
    public user: User;

    constructor(private socket: Socket) { }

    joinRoom(callback) {
        this.socket.emit('join', { name: this.user.name, room: this.user.room }, callback);
        
    }
}

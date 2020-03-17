import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../services/http.service';
import { PokerService } from '../services/poker.service';
import { User } from '../models/user';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    userName: string;
    userRoom: string;
    userDeck: string;
    decks: string[] = [];
    rooms: string[] = [];
    showDeckSelectElement: boolean = true;
    showJoinButton: boolean = false;
    hasName: boolean = false;
    hasRoom: boolean = false;

    constructor(private _http: HttpService, private _router: Router, private _pokerService: PokerService) { }

    ngOnInit(): void {
        this._http.getRoomNames().subscribe(data => {
            this.rooms = data as string[];
        });
        this._http.getDeckNames().subscribe(data => {
            this.decks = data as string[];
        });
    }

    showDeckSelector(roomname) {
        this.showDeckSelectElement = this.rooms && this.rooms.indexOf(roomname?.trim()) == -1;
    }

    OnNameUpdate(name: string) {
        this.hasName = name && name.trim().length > 0 ? true : false;
    }

    OnRoomNameUpdate(roomname: string) {
        this.showDeckSelector(roomname);
        this.hasRoom = roomname && roomname.trim().length > 0 ? true : false;
    }

    useRoom(roomname) {
        this.showDeckSelector(roomname);
        this.userRoom = roomname;
    }

    joinRoom() {
        const user = new User();
        user.name = this.userName;
        user.room = this.userRoom;
        user.deck = this.userDeck;

        this._pokerService.user = user;
        this._pokerService.joinRoom(() => {
            this._router.navigateByUrl('/room')
        });
    }
}

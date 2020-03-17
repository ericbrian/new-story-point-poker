import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { stringify } from 'querystring';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    decks: string[] = [];
    rooms: string[] = [];
    showDeckSelectElement: boolean = true;
    showJoinButton: boolean = false;
    hasName: boolean = false;
    hasRoom: boolean = false;
    joinRoomVal: string = "";

    constructor(private _http: HttpService) { }

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
        this.joinRoomVal = roomname;
    }

    joinRoom() {

    }
}

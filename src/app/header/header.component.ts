import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() city :EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    getCity(cit: HTMLInputElement) {
        this.city.emit(cit.value);
    }

    ngOnInit() {

    }

}

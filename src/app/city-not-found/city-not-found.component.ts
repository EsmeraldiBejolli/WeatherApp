import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'city-not-found',
    templateUrl: './city-not-found.component.html',
    styleUrls: ['./city-not-found.component.css']
})
export class CityNotFoundComponent implements OnInit {
    @Input() error: any;
    constructor() { }

    ngOnInit() {
    }

}

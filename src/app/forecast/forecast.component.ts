import { Component, OnInit,Input } from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {ForecastService} from '../forecast.service';
declare var randopeep:any;
@Component({
    selector: 'forecast-widget',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.css']
})



export class ForecastComponent implements OnInit {
    @Input() data: Object;

    constructor(private http: Http) {
    }
  
    ngOnInit() {
      
    }
}

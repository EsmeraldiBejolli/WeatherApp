import { Component, OnInit } from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {ForecastService} from './forecast.service';
import {RandomCities} from './randomCities.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    data: Object;
    error: any;
    service: ForecastService;
    city: {
        lat: number,
        lag: number
    };
    constructor(private http: Http) { }

    ngOnInit() {
        this.service = new ForecastService(this.http);
        this.city = new RandomCities().getRandomCity();
        this.service.getRandomCityForecast(this.city.lat, this.city.lag).subscribe(result => this.data = result);
    }

    getCityForecast(event) {
        this.service.getCityForecast(event).subscribe((result) => {
            this.data = result,
                this.error = false;
        },
            (err) => {
                this.data = "";
                this.error = err ;
                
            });
    }
}

import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ForecastService {

    constructor(private http: Http) { }

    getRandomCityForecast(lat: number,lag:number): Observable<Response>{
        let url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lag + "&units=metric&APPID=a8f5261ee6863849df5a45497bb27163"
        return this.http.get(url)
                        .map(response => response.json());
    }

    getCityForecast(city: string): Observable<Response> {
        let url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=a8f5261ee6863849df5a45497bb27163"
        return this.http.get(url)
            .map(response => response.json());
    }


}
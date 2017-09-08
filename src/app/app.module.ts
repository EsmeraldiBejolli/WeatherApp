import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http} from '@angular/http';
import { AppComponent } from './app.component';
import { CityNotFoundComponent } from './city-not-found/city-not-found.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HeaderComponent } from './header/header.component';
import { ForecastService }  from './forecast.service';
import { RandomCities }  from './randomCities.service';

@NgModule({
    declarations: [
        AppComponent,
        CityNotFoundComponent,
        ForecastComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule
    ],
    providers: [ForecastService,
        RandomCities
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

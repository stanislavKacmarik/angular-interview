import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavigationComponent} from './components/navigation/navigation.component';
import {WeatherDetailComponent} from './pages/weather-detail/weather-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NearCityComponent} from './pages/near-city/near-city.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        WeatherDetailComponent,
        WelcomeComponent,
        NearCityComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

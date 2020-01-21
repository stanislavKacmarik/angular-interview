import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WeatherDetailComponent} from './pages/weather-detail/weather-detail.component';
import {NearCityComponent} from './pages/near-city/near-city.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';


const routes: Routes = [
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'detail',
        component: WeatherDetailComponent
    },
    {
        path: 'near',
        component: NearCityComponent
    },
    {
        path: '**',
        redirectTo: '/welcome',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

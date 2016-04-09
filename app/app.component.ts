//import {Component} from 'angular2/core';
import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {Home} from "./home/home";
import {FlugSuchen} from "./flug-suchen/flug-suchen.component";
import {PassagierSuchen} from "./passagier-suchen/passagier-suchen";
import {FlugEdit} from "./flug-edit/flug-edit";
import {FlugBuchen} from "./flug-buchen/flug-buchen";
import {CalcComponent } from './counter-demo/calc.component';
import {BoardingComponent } from './boarding/boarding.component';
 
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES] // router-outlet, routerLink
})
@RouteConfig([
    { path: '/home', component: Home, name: 'Home', useAsDefault: true },
    { path: '/flug-buchen/...', component: FlugBuchen, name: 'FlugBuchen'},
    { path: '/counter', component: CalcComponent, name: 'Counter'},
    { path: '/boarding', component: BoardingComponent, name: 'Boarding'}
])
export class AppComponent {

}

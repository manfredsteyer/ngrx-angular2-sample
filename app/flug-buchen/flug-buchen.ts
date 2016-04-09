

import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {FlugSuchen} from "../flug-suchen/flug-suchen.component";
import {PassagierSuchen} from "../passagier-suchen/passagier-suchen";
import {FlugEdit} from "../flug-edit/flug-edit";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {FlugService} from "../services/flug.service";

@Component({
    templateUrl: 'app/flug-buchen/flug-buchen.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [FlugService]
})
@RouteConfig([
    { path: 'flug-suchen', component: FlugSuchen, name: 'FlugSuchen', useAsDefault: true },
    { path: 'passagier-suchen', component: PassagierSuchen, name: 'PassagierSuchen'},
    { path: 'flug-edit/:id', component: FlugEdit, name: 'FlugEdit'}
])
export class FlugBuchen {


}
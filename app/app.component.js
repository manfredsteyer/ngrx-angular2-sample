System.register(["angular2/core", "angular2/router", "./home/home", "./flug-buchen/flug-buchen", './counter-demo/calc.component', './boarding/boarding.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, home_1, flug_buchen_1, calc_component_1, boarding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (flug_buchen_1_1) {
                flug_buchen_1 = flug_buchen_1_1;
            },
            function (calc_component_1_1) {
                calc_component_1 = calc_component_1_1;
            },
            function (boarding_component_1_1) {
                boarding_component_1 = boarding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES] // router-outlet, routerLink
                    }),
                    router_2.RouteConfig([
                        { path: '/home', component: home_1.Home, name: 'Home', useAsDefault: true },
                        { path: '/flug-buchen/...', component: flug_buchen_1.FlugBuchen, name: 'FlugBuchen' },
                        { path: '/counter', component: calc_component_1.CalcComponent, name: 'Counter' },
                        { path: '/boarding', component: boarding_component_1.BoardingComponent, name: 'Boarding' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
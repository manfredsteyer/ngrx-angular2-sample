System.register(['angular2/core', "../services/flug.service", "../services/app-services", "../pipes/ort.pipe", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, flug_service_1, app_services_1, ort_pipe_1, router_1;
    var FlugSuchen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (app_services_1_1) {
                app_services_1 = app_services_1_1;
            },
            function (ort_pipe_1_1) {
                ort_pipe_1 = ort_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FlugSuchen = (function () {
                function FlugSuchen(flugService) {
                    this.flugService = flugService;
                    this.von = 'Graz';
                    this.nach = 'Hamburg';
                }
                Object.defineProperty(FlugSuchen.prototype, "fluege", {
                    // public fluege: Array<Flug> = [];
                    get: function () {
                        return this.flugService.fluege;
                    },
                    enumerable: true,
                    configurable: true
                });
                FlugSuchen.prototype.suchen = function () {
                    this.flugService
                        .find(this.von, this.nach);
                    /*
                                .then((fluege: Array<Flug>) => {
                                    this.fluege = fluege;
                                })
                                .catch((err) => {
                                    console.error('Fehler beim Laden von Flügen!');
                                    console.error(err);
                                });
                    */
                };
                FlugSuchen.prototype.select = function (flug) {
                    this.selectedFlug = flug;
                };
                FlugSuchen = __decorate([
                    core_1.Component({
                        selector: 'flug-suchen',
                        templateUrl: 'app/flug-suchen/flug-suchen.component.html',
                        providers: [app_services_1.APP_SERVICES],
                        directives: [router_1.ROUTER_DIRECTIVES,],
                        pipes: [ort_pipe_1.OrtPipe]
                    }), 
                    __metadata('design:paramtypes', [flug_service_1.FlugService])
                ], FlugSuchen);
                return FlugSuchen;
            }());
            exports_1("FlugSuchen", FlugSuchen);
        }
    }
});
//# sourceMappingURL=flug-suchen.component.js.map
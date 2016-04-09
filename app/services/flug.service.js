System.register(["angular2/http", "angular2/core"], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var http_1, http_2, http_3, core_1, core_2;
    var FlugService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
                http_3 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            FlugService = (function () {
                function FlugService(http, baseUrl) {
                    this.http = http;
                    this.baseUrl = baseUrl;
                }
                FlugService.prototype.findById = function (id) {
                    var headers = new http_2.Headers();
                    headers.set('Accept', 'text/json');
                    var search = new http_3.URLSearchParams();
                    search.set('flugNummer', id);
                    var url = this.baseUrl + "/flug";
                    return this
                        .http
                        .get(url, { search: search, headers: headers })
                        .map(function (response) { return response.json(); });
                };
                FlugService.prototype.save = function (flug) {
                    var headers = new http_2.Headers();
                    headers.set('Content-Type', 'text/json');
                    var url = this.baseUrl + "/flug";
                    return this
                        .http
                        .post(url, JSON.stringify(flug), { headers: headers })
                        .map(function (response) { return response.text(); });
                };
                FlugService.prototype.find = function (von, nach) {
                    var _this = this;
                    var headers = new http_2.Headers();
                    headers.set('Accept', 'text/json');
                    var search = new http_3.URLSearchParams();
                    search.set('abflugort', von);
                    search.set('zielort', nach);
                    var url = this.baseUrl + "/flug";
                    return this
                        .http
                        .get(url, { search: search, headers: headers })
                        .map(function (response) { return response.json(); })
                        .subscribe(function (fluege) {
                        _this.fluege = fluege;
                        _this.error = "";
                    }, function (err) {
                        _this.error = err;
                    });
                };
                FlugService = __decorate([
                    core_1.Injectable(),
                    __param(1, core_2.Inject('BASE_URL')), 
                    __metadata('design:paramtypes', [http_1.Http, String])
                ], FlugService);
                return FlugService;
            }());
            exports_1("FlugService", FlugService);
        }
    }
});
//# sourceMappingURL=flug.service.js.map
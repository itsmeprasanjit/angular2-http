/// <reference path="typings/tsd.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var HelloCmp = (function () {
    function HelloCmp(_http) {
        this._http = _http;
        this.result = {};
    }
    HelloCmp.prototype.sayHello = function () {
    };
    HelloCmp.prototype.getInfo = function () {
        var _this = this;
        this._http
            .get('http://jsonplaceholder.typicode.com/posts/2')
            .toRx()
            .map(function (r) { return r.json(); })
            .subscribe(function (r) {
            _this.result = r;
            console.log(_this.result);
        });
    };
    HelloCmp = __decorate([
        angular2_1.Component({
            selector: 'hello',
            viewBindings: [http_1.HTTP_BINDINGS],
        }),
        angular2_1.View({
            template: "\n    <h2>hello</h2>\n    <button type=\"button\" (click)=\"getInfo()\">get info</button> \n    <p>hello there, <span [text-content]=\"result.title\"></span>!</p> \n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HelloCmp);
    return HelloCmp;
})();
angular2_1.bootstrap(HelloCmp);
//# sourceMappingURL=app.js.map
/// <reference path="typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {Http, HTTP_BINDINGS} from 'angular2/http';

@Component({
  selector: 'hello',
  viewBindings: [HTTP_BINDINGS],
  
})
@View({
  template: `
    <h2>hello</h2>
    <button type="button" (click)="getInfo()">get info</button> 
    <p>hello there, <span [text-content]="result.title"></span>!</p> 
  `
})

class HelloCmp {
  result: any = <any>{};
  
  constructor(private _http: Http) {
    
  }
  
  sayHello() {
    
  }
  
  getInfo() {
    this._http
        .get('http://jsonplaceholder.typicode.com/posts/2')
        .toRx()
        .map((r) => r.json())
        .subscribe((r) => {
          this.result = r;
          
          console.log(this.result)
        });
  }
}

bootstrap(HelloCmp);
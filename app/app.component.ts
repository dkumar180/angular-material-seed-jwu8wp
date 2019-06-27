import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'seed-app',
  encapsulation: ViewEncapsulation.None,
  template: `
    <ui-layout>
      <router-outlet></router-outlet>
    </ui-layout>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent  {}

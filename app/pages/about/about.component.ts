import { Component  } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {

  cards = [
    { 
      title: 'About',
      content: 'This is an Angular Seed on StackBlitz',
    },
    { 
      title: 'Adding new pages',
      content: '',
      items: [
        'Create your component: <code>pages/my-thing.component.ts</code>',
        'Declare component in <code>pages/page.module.ts</code>',
        'Add routes to component in <code>app-routing.module.ts</code>',
        'Update navigation in <code>core/ui/ui.config.ts</code>',
      ]
    },
    { 
      title: 'Dependencies',
      items: [
        'Angular 4.x',
        '@ngrx/store 4.x',
        'Bootstrap 4 beta',
        'Font Awesome 4.7',
      ]
    }
  ]

}

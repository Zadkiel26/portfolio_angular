import { Component } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  template: `
  <div>
    <app-nav></app-nav>

    <main>
        <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  </div>
  `,
  styles: [

  ]
})
export class BaseLayoutComponent {

}

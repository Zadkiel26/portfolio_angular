/**
 * ========================================================
 * Title: app.component.ts
 * Author: Zadkiel Rodriguez
 * Date: 7/30/2024
 * Description: App component
 * ========================================================
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
    
  ]
})
export class AppComponent {
  title = 'portfolio_angular';
}

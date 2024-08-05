/**
 * ========================================================
 * Title: app.component.ts
 * Author: Zadkiel Rodriguez
 * Date: 7/30/2024
 * Description: App component
 * ========================================================
 */
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
    
  ]
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        if(this.router.url === '/') {
          document.body.classList.add('home-bg');
        } else {
          document.body.classList.remove('home-bg');
        }
      }
    })
  }
}

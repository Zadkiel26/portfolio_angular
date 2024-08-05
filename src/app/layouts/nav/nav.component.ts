import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  // Local variables
  menuVisible: boolean = false;
  dropdownVisible: boolean = false;
  hideDropdownTimeout: any;

  constructor(private router: Router) {}

  // Toggle menu for small screen
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}

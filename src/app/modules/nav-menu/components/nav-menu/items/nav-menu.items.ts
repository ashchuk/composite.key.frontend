import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-nav-item',
  templateUrl: './nav-menu.items.html',
  styleUrls: ['./nav-menu.items.scss']
})
export class SideNavItemComponent {

  @Input() iconHome;

  @Input('title') title: string;
  @Input('route') route: string;
  @Input('disabled') disabled: boolean;
  active: boolean;

  constructor(private router: Router) {
  }


  navigate() {
    if (!this.disabled) {
      this.router.navigate([this.route]);
    }
  }

  activatePath(path: string) {
    if (path === this.route) {
      this.active = true;
    } else {
      this.active = false;
    }
  }
}
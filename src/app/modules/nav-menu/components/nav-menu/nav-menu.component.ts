import { Component, Input, ContentChildren, QueryList, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { SideNavItemComponent } from './items/nav-menu.items';


@Component({
    selector: 'side-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnDestroy {

    @Input() sidenav: MatSidenav;
    @Input() title: '';
    @ContentChildren(SideNavItemComponent, { descendants: true }) items: QueryList<SideNavItemComponent>;
    active: SideNavItemComponent;

    constructor(private router: Router, private route: ActivatedRoute) {
        this.router.events.subscribe(e => {
            if (e instanceof NavigationEnd) {
                this.items.forEach(i => {
                    i.activatePath(this.getPath());
                });
                this.sidenav.close();
            }
        });
    }

    ngOnDestroy(): void { }

    private getPath() {
        const path = this.router.routerState.snapshot.url;
        return path;
    }
}
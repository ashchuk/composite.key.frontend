import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SideNavItemComponent } from './components/nav-menu/items/nav-menu.items';
import { NavMenuService } from './nav-menu.service';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        NavMenuComponent,
        SideNavItemComponent,
        AppMenuComponent
    ],
    providers: [
        NavMenuService
    ],
    exports: [
        AppMenuComponent,
        NavMenuComponent,
        SideNavItemComponent
    ],
    entryComponents: [
    ]
})
export class NavMenuModule { }

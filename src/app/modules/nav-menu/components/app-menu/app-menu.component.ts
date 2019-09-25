import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavMenuService } from '../../nav-menu.service';

@Component({
	selector: 'app-menu',
	templateUrl: './app-menu.component.html',
	styleUrls: ['./app-menu.component.scss'],
	host: {
		'(window:resize)': 'onResize($event)'
	}
})
export class AppMenuComponent implements OnInit, OnDestroy {

	constructor(private navMenuService: NavMenuService) { }

	ngOnInit(): void { }

	ngOnDestroy(): void { }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  constructor(private router: Router, private route: ActivatedRoute, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void { }

  ngOnDestroy(): void { }

  get isAuthenticated() {
    return true
  }

}
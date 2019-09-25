import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { AreaComponent } from './components/area.component';
import { AreaService } from './area.service';
import { RouterModule, Routes } from '@angular/router';
import { AreaEditComponent } from './components/edit/area-edit.component';
import { AreaModalComponent } from './components/modal/area-modal.component';

const routes: Routes = [
    { path: 'area', component: AreaComponent },
    { path: 'area/:id', component: AreaEditComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        AreaComponent,
        AreaEditComponent,
        AreaModalComponent
    ],
    providers: [
        AreaService
    ],
    exports: [
        AreaComponent,
        AreaEditComponent
    ],
    entryComponents: [
        AreaModalComponent
    ]
})
export class AreaModule { }

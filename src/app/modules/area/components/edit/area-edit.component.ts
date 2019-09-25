import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaModel } from '../../models/area.model';
import { AreaService } from '../../area.service';
import { FormControl, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from '../../../../utils/custom-error-state-matcher.utils';
import { ItemModel, toItemModel } from '../../../../models/item.model';
import { AreaUpdateModel } from '../../models/area-update.model';
import { AreaAddModel } from '../../models/area-add.model';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';


@Component({
    selector: 'area-component',
    templateUrl: './area-edit.component.html',
    styleUrls: ['./area-edit.component.scss']
})
export class AreaEditComponent implements OnInit, OnDestroy {

    area: AreaModel = new AreaModel();

    areaFormControl: FormControl;
    matcher = new CustomErrorStateMatcher();

    areaItems: ItemModel[] = new Array<ItemModel>();

    constructor(private route: ActivatedRoute, private router: Router, private areaSerice: AreaService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.area.id = +params['id'] || 0;
            this.createForm();
            if (this.area.id != 0)
                this.areaSerice.getArea(this.area.id)
                    .pipe(untilComponentDestroyed(this))
                    .subscribe(area => {
                        this.area = area;
                        this.areaItems = toItemModel(area);
                    }, error => this.router.navigate(['/not-found']));
        });
    }

    ngOnDestroy(): void { }

    private createForm() {
        this.areaFormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._-]{1,200}')]);
    }

    onSave() {
        if (this.area.id != 0) {
            this.areaSerice.updateArea(<AreaUpdateModel>{ id: this.area.id, name: this.area.name })
            .pipe(untilComponentDestroyed(this))
            .subscribe(data => {
                this.router.navigate(['/area']);
            });
        }
        else {
            this.areaSerice.addArea(<AreaAddModel>{ name: this.area.name })
            .pipe(untilComponentDestroyed(this))
            .subscribe(data => {
                this.router.navigate(['/area']);
            });
        }
    }
}

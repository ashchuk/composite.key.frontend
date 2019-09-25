import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AreaModel } from '../models/area.model';
import { AreaService } from '../area.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { MatDialog } from '@angular/material/dialog';
import { AreaModalComponent } from './modal/area-modal.component';


@Component({
    selector: 'area-component',
    templateUrl: './area.component.html',
    styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit, OnDestroy {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns = ['id', 'name', 'createdOn', 'createdBy', 'updatedOn', 'updatedBy', 'edit', 'delete'];

    areaSource = new MatTableDataSource<AreaModel>();

    constructor(private router: Router, private areaService: AreaService, public dialog: MatDialog) { }

    ngOnInit(): void {
        this.areaService.getAreas()
            .pipe(untilComponentDestroyed(this))
            .subscribe(data => {
                this.areaSource.data = data;
                this.areaSource.paginator = this.paginator;
            });
    }

    ngOnDestroy(): void { }

    onRemove(area: AreaModel): void {
        const dialogRef = this.dialog.open(AreaModalComponent, {
            width: '350px',
            data: { area: area }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.areaService.deleteArea(area.id)
                    .pipe(untilComponentDestroyed(this))
                    .subscribe(data => {
                        this.areaSource.data = this.areaSource.data.filter(a => a.id != area.id);
                    });
            }
        });
    }

    getLink(id: number) {
        this.router.navigate(['/area/' + id]);
    }
}

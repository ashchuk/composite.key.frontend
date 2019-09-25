import { OnInit, OnDestroy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'area-modal-component',
    templateUrl: './area-modal.component.html',
    styleUrls: ['./area-modal.component.scss']
})
export class AreaModalComponent implements OnInit, OnDestroy {

    constructor(public dialogRef: MatDialogRef<AreaModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void { }
}

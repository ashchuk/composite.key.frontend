import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { OVERLAY_PROVIDERS } from '@angular/cdk/overlay';

@NgModule({
        imports: [
                TranslateModule.forChild()
        ],
        exports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                TranslateModule,
                RouterModule,
                MaterialModule
        ],
        providers: [
                OVERLAY_PROVIDERS
        ],
})
export class SharedModule { }

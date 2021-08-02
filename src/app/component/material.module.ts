import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatSidenavModule, MatMenuModule,
        MatListModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule,
        MatDatepickerModule, MatChipsModule, MatTooltipModule, MatTableModule, MatPaginatorModule,
        MatDialogModule, MatStepperModule, MatCheckboxModule, MatSnackBarModule, MatTabsModule, MatCardModule,
        MatExpansionModule, MatProgressSpinnerModule, MatNativeDateModule
    ],
    exports: [
        MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatSidenavModule, MatMenuModule,
        MatListModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule,
        MatDatepickerModule, MatChipsModule, MatTooltipModule, MatTableModule, MatPaginatorModule,
        MatDialogModule, MatStepperModule, MatCheckboxModule, MatSnackBarModule, MatTabsModule, MatCardModule,
        MatExpansionModule, MatProgressSpinnerModule, MatNativeDateModule
    ]

})

export class MaterialModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatSelectModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { OnlyNumberDirective } from '../core/directives/only-number.directive';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    declarations: [
        OnlyNumberDirective
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        FormsModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatTableModule,
        MatPaginatorModule,
    ],
    exports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        FormsModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatDividerModule,
        OnlyNumberDirective,
        MatTableModule,
        MatPaginatorModule,
    ],
    providers: [],
    bootstrap: []
})
export class LibModule { }

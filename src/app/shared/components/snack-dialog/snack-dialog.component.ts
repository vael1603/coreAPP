import { SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'snack-dialog',
  standalone: true,
  templateUrl: './snack-dialog.component.html',
  styleUrls: ['./snack-dialog.component.scss'],
  imports: [
    MatSnackBarModule,
    SlicePipe,
    UpperCasePipe
  ]
})

export class SnackDialogComponent {
  snackBarRef = inject(MatSnackBarRef)
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: {message:string, styleclass: string, type: string}
  ){}
}

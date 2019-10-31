import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Injectable()

export class SnackService
{
  private snackBarOptions: MatSnackBarConfig = new MatSnackBarConfig;

//private snackBarOptions: MatSnackBarConfig = new MatSnackBarConfig();

  constructor(
    private snackBar: MatSnackBar)
  {

  }

  launch(message: string, action: string, duration: number)
  {
    
    this.snackBarOptions.duration = duration;
    this.snackBar.open(message, action, this.snackBarOptions);

  }


}

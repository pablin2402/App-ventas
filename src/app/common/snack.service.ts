import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from "@angular/material";

@Injectable()

export class SnackService
{

//  private snackBarOptions: MatSnackBarConfig = new MatSnackBarConfig;

  constructor(private snackBar: MatSnackBar, private zone: NgZone)
  {

  }

//  launch(message:string, action: string, duration: number)
  //{

    //  this.snackBarOptions.duration = duration;
    //  this.snackBar.open(message, action, this.snackBarOptions);

//  }
public open(message, action = 'success', duration = 50000) {
    this.zone.run(() => {
        this.snackBar.open(message, action, { duration });
    });
}

}

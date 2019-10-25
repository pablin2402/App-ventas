import { Component, Input, OnInit,EventEmitter, Output} from '@angular/core';
import { fallIn, moveIn} from 'src/app/router.animation';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
  
})

export class HeaderComponent  implements OnInit{  
  //NOMBRE APP
  public app_name:string ="Tienda";
  //condicion para hacer aparecer etiquetas
  public isLogged = false;




 @Output() SideNavigationToggle=new  EventEmitter();

  @Input() pageTitle: string; 
  @Input() iconTitle: string; 
  @Input() helpTitle: string;
  
  configData;
  counter=0;
  userStatusColor="warm";

  constructor(private _backendservice: BackendService) { }

  ngOnInit() {
    this.counter=0;
    this.configData= this._backendservice.getConfig();
    this._backendservice.getCartTotal().subscribe(
      (res) => {
        this.counter=res;
      }
    );
     this._backendservice.getUserStatus().subscribe(
      (res) => {
        this.userStatusColor = res ? "primary": "warm";
      }
    );

  }

  onToggleOpenSideNav(){
      this.SideNavigationToggle.emit();

  }
}



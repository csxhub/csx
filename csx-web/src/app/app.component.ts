import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from './shared/models/order';

import { OrderService } from './shared/services/order.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'csx-web';
orders:Order[]=[];

  constructor(private router:Router,private orderService:OrderService){
    this.getUsersAll();
    this.router.navigate(['portal-home']);
  }


  

  getUsersAll(){
    this.orderService.getAll().subscribe((data: any) => { this.orders=data; },error=>{ console.log(error); }
    )   
  }
}

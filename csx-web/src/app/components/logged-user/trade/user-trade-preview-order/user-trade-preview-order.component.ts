import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {filter, map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-user-trade-preview-order',
  templateUrl: './user-trade-preview-order.component.html',
  styleUrls: ['./user-trade-preview-order.component.scss']
})
export class UserTradePreviewOrderComponent implements OnInit {

  orderDetails=new OrderDetails;
  decision:string;
  
  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<UserTradePreviewOrderComponent>,@Inject(MAT_DIALOG_DATA) public data: { orderDetails: OrderDetails}) { }

  ngOnInit(): void {
   // this.orderDetails=new OrderDetails;
    this.orderDetails=this.data.orderDetails;
    this.dialogRef.updatePosition({ top: '-620px', left: '300px' });
  }

 // this.returnedPymObj=new Payment;
  closeDialogProcess(){
   this.decision="_ProcessOrder";
    this.dialogRef.close(this.decision);  ; 
  }

  closeDialogEdit(){
    this.decision="_EditOrder";
     this.dialogRef.close(this.decision);  
   }
  
  closeDialogCancel(){
    this.decision="_CancelOrder"
    this.dialogRef.close(this.decision);
  }
}


export class OrderDetails {
  transaction:string;
  board:string;
  term:string;
  stock:string;
  number_of_shares:number;
  price:number;
  net_amount:number;
}
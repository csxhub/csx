import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/shared/models/order';
import { Stock } from 'src/app/shared/models/stock';
import { OrderService } from 'src/app/shared/services/order.service';
import { StockService } from 'src/app/shared/services/stock.service';
import { TraderService } from 'src/app/shared/services/trader.service';
import {DatePipe, formatDate} from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { UserTradePreviewOrderComponent } from '../user-trade-preview-order/user-trade-preview-order.component';

@Component({
  selector: 'user-trade-enter-order',
  templateUrl: './user-trade-enter-order.component.html',
  styleUrls: ['./user-trade-enter-order.component.scss']
})
export class UserTradeEnterOrderComponent implements OnInit {


  frmPostOrder: FormGroup;
  order=new Order;
  stock: Stock;
  stocks: Stock[];

  constructor(public dialog: MatDialog,private formBuilder: FormBuilder,private ordereService:OrderService,private stockService:StockService,private traderService:TraderService) { }

  ngOnInit(): void {
    this.initFrmPostOrder();

  }

 initFrmPostOrder(){
    this.frmPostOrder = this.formBuilder.group({
      cAction:'',//['',Validators.required],
      cBoard:'',//['',Validators.required],
      cTerm:'',//['',Validators.required],
      cStockCode: '',//['',Validators.required],
      cSize:'',//['',Validators.required],
      cPrice:'',//['',Validators.required],
      cNetAmount:''

    })
  }
  get frmStockSearchControls() { return this.frmPostOrder.controls; }


  saveOrder(){
    let stockCode=this.frmPostOrder.get('cStockCode')?.value;
    this.stockService.getByCode(stockCode)
    .subscribe(
      (data)=>{
        this.stock=data;
        //*
        //this.order=new Order;
        this.order.order_time=new Date();
        this.order.price=this.frmPostOrder.get('cPrice')?.value;
        this.order.size=this.frmPostOrder.get('cSize')?.value;
        this.order.side=this.frmPostOrder.get('cAction')?.value;
        this.order.stock_id=this.stock.stockID;
        this.order.trader_id=1;
        this.order.isactive=true;
      
        this.ordereService.create(this.order).subscribe(
          data=>{
            if(data){
              console.log("Order saved "+JSON.stringify(data));
            }
            else{

            } 
          },
          error=>{ console.log(error); }
        );
        
      },
      ( error: { status: string | number; })=>{ 
        if(error.status=== 404){}else{console.log("ERR==: "+error.status);
        }
      }
    );
  
  }

  clearOrder(){
    this.frmPostOrder.get('cStockCode')?.setValue('');
    this.frmPostOrder.get('cSize')?.setValue('');
    this.frmPostOrder.get('cPrice')?.setValue('');
    this.frmPostOrder.get('cNetAmount')?.setValue('');
  }  

  previewOrder(){
    const dialogConfig = new MatDialogConfig();
    let orderDetails=new OrderDetails;
    orderDetails.transaction=this.frmPostOrder.get('cAction')?.value;
      orderDetails.board=this.frmPostOrder.get('cBoard')?.value;
      orderDetails.term=this.frmPostOrder.get('cTerm')?.value;
      orderDetails.stock=this.frmPostOrder.get('cStockCode')?.value;
      orderDetails.number_of_shares=this.frmPostOrder.get('cSize')?.value;
      orderDetails.price=this.frmPostOrder.get('cPrice')?.value;
      orderDetails.net_amount=this.frmPostOrder.get('cNetAmount')?.value;
    dialogConfig.data = {orderDetails};
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.width = "635px";
    dialogConfig.panelClass= 'custom-modalbox';
   //* not working dialogConfig.position = {left: '600px',top:'200px'};
   
    let dialogRef = this.dialog.open(UserTradePreviewOrderComponent, dialogConfig);
    let retour:boolean;
    dialogRef.afterClosed().pipe(filter((returnedData: any) => returnedData)).subscribe(
      returnData => {
        if(returnData=='_ProcessOrder'){
          this.saveOrder();
        }
        else if(returnData=='_EditOrder'){
          alert("Edit -- "+returnData)
        } 
        else if(returnData=='_CancelOrder'){
          this.clearOrder();
        }
        else{}
      })
      //*

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

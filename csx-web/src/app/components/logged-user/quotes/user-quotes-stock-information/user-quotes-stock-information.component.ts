import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
///import { OrderStockTrader } from 'src/app/shared/models/order-stock-trader';
import { OrderTransactions } from 'src/app/shared/models/order-transactions';
import { Stock } from 'src/app/shared/models/stock';
import { StockBidAsk } from 'src/app/shared/models/stock-bid-ask';
import { StockSummaries } from 'src/app/shared/models/stock-summaries';
import { OrderTransactionsService } from 'src/app/shared/services/order-transactions.service';
///import { OrderStockTraderService } from 'src/app/shared/services/order-stock-trader.service';
import { StockBidAskService } from 'src/app/shared/services/stock-bid-ask.service';
import { StockSummariesService } from 'src/app/shared/services/stock-summaries.service';
import { StockService } from 'src/app/shared/services/stock.service';

@Component({
  selector: 'user-quotes-stock-information',
  templateUrl: './user-quotes-stock-information.component.html',
  styleUrls: ['./user-quotes-stock-information.component.scss']
})
export class UserQuotesStockInformationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private stockService:StockService,private stockSummariesService:StockSummariesService,private stockBidAskService:StockBidAskService,private orderTransactionsService:OrderTransactionsService) { }

  ngOnInit(): void {
    this.initFrmStockSearch();
    this.getStocksAll();
    //*
    this.emptyTables();
    //*
    if(localStorage.getItem('stock_code_stored')!==''){
      this.frmStockSearch.get('cStockCode')?.setValue(localStorage.getItem('stock_code_stored'));
      this.onStockSearch();
      let c_code=this.frmStockSearch.get('cStockCode')?.value;
      if(c_code==''){
        alert('please enter Stock Code ddd');

        return;
      }
      else{
        //*
        this.onOrderStockTransactionsByStockCode(c_code);
        //*
        this.onStockBidAskByCodeSide(c_code);
        //*
        this.onStockSummariesByCodeSide(c_code);
        //*
        /////this.emptyTables();

      }
      
    }

  }

  emptyTables(){
    //*
    this.stock=new Stock;
    this.stocks=[];
    this.stocks.push(this.stock);
    this.dsSearchStock=this.stocks;
    //*
    this.stockBidAsk=new StockBidAsk;
    this.dsStockBid=[];
    this.dsStockBid.push(this.stockBidAsk);
    this.stockBidAsk=new StockBidAsk;
    this.dsStockAsk=[];
    this.dsStockAsk.push(this.stockBidAsk);
    //*
    this.orderStockTransaction=new OrderTransactions;
    this.dsOrderStockTransaction=[];
    this.dsOrderStockTransaction.push(this.orderStockTransaction);
  }
  
 _openHomeHomeStarter=true;
 _openHomeHomeStockDetailed=false;

 dsStockBidColumns=['NumberOfBuyers','Size','Price'];
 dsStockBid: StockBidAsk[];

 dsStockAskColumns=['Price','Size','NumberOfSellers'];
 dsStockAsk: StockBidAsk[];

 displayedColumns = ['stock_id','code','description'];
 dsSearchStock: Stock[];
 columnsDsOrderStockTransaction = ['time','price','size','buyer','seller'];
 dsOrderStockTransaction: OrderTransactions[];

 stocks:Stock[]=[];
 stock:Stock;
orderStockTransaction:OrderTransactions;
orderStockTransactions:OrderTransactions[]=[];
stockBidAsks:StockBidAsk[]=[];
stockBidAsk:StockBidAsk;
stockSummaries:StockSummaries[]=[];
stockSummary:StockSummaries;

viewStockDetailed(){
this._openHomeHomeStarter=false;
this._openHomeHomeStockDetailed=true;
}

frmStockSearch: FormGroup;
initFrmStockSearch(){
this.frmStockSearch = this.formBuilder.group({
  cStockCode: ''
})
}
get frmStockSearchControls() { return this.frmStockSearch.controls; }

onOrderStockTransactionsByStockCode(code:string){
  this.orderTransactionsService.getByStockCode(code)
     .subscribe(
       data=>{
        if(data){
          this.orderStockTransactions=[];
          this.orderStockTransactions=data;
          this.dsOrderStockTransaction=this.orderStockTransactions;
        }
        else{
          //*
          this.orderStockTransaction=new OrderTransactions;
          this.dsOrderStockTransaction=[];
          this.dsOrderStockTransaction.push(this.orderStockTransaction);
        }
       },
       error=>{ 
        if(error.status=== 404){
          alert(code+" Error");
          //*
          this.orderStockTransaction=new OrderTransactions;
          this.dsOrderStockTransaction=[];
          this.dsOrderStockTransaction.push(this.orderStockTransaction);
        }
        else{
          console.log("ERR==: "+error.status);
        }
      }
     );
     
    }

    onStockBidAskByCodeSide(code:string){
      //* Bid=BUY
      this.stockBidAskService.getAllByCode(code,'BUY')
         .subscribe(
           data=>{
            if(data){
              this.stockBidAsks=[];
              this.stockBidAsks=data;
              this.dsStockBid=this.stockBidAsks;
            }
            else{
              this.stockBidAsk=new StockBidAsk;
              this.dsStockBid=[];
              this.dsStockBid.push(this.stockBidAsk);
            }
           },
           error=>{ 
            if(error.status=== 404){
              this.stockBidAsk=new StockBidAsk;
              this.dsStockBid=[];
              this.dsStockBid.push(this.stockBidAsk);
            }
            else{
              console.log("ERR==: "+error.status);
            }
          }
         );
         //* Ask=SELL
      this.stockBidAskService.getAllByCode(code,'SELL')
      .subscribe(
        data=>{
         if(data){
           this.stockBidAsks=[];
           this.stockBidAsks=data;
           this.dsStockAsk=this.stockBidAsks;
         }
         else{
           this.stockBidAsk=new StockBidAsk;
           this.dsStockAsk=[];
           this.dsStockAsk.push(this.stockBidAsk);
         }
        },
        error=>{ 
         if(error.status=== 404){
           this.stockBidAsk=new StockBidAsk;
           this.dsStockAsk=[];
           this.dsStockAsk.push(this.stockBidAsk);
         }
         else{
           console.log("ERR==: "+error.status);
         }
       }
      );
  }
  
  
  onStockSummariesByCodeSide(code:string){
    //* Bid=BUY
    this.stockSummariesService.getAllByCode(code)
       .subscribe(
         data=>{
          if(data){
            this.stockSummaries=[];
            this.stockSummaries=data;
           /// this.dsStockBid=this.stockBidAsks;
          }
          else{
           /// this.stockBidAsk=new StockBidAsk;
           // this.dsStockBid=[];
           // this.dsStockBid.push(this.stockBidAsk);
          }
         },
         error=>{ 
          if(error.status=== 404){
           // this.stockBidAsk=new StockBidAsk;
           // this.dsStockBid=[];
           // this.dsStockBid.push(this.stockBidAsk);
          }
          else{
            console.log("ERR==: "+error.status);
          }
        }
       );
}

onStockSearchByCode(code:string){
  /*
  this.stock=new Stock;
  this.stock.stockId=22;
  this.stock.stockCode="z";
  this.stock.stockDescription="zazaa";
  this.stocks=[];
  this.stocks.push(this.stock);
  this.dsSearchStock=this.stocks;
  */
  this.stockService.getByCode(code)
     .subscribe(
       data=>{
         this.stock=data; 
          this.stocks=[];
          this.stocks.push(this.stock);
          this.dsSearchStock=this.stocks;
       },
       error=>{ 
        if(error.status=== 404){
          alert(code+" NOT found");
          this.stock=new Stock;
          this.stocks=[];
          this.stocks.push(this.stock);
          this.dsSearchStock=this.stocks;
        }
        else{
          console.log("ERR==: "+error.status);
        }
      }
     );
     
    }

onStockSearch(){
  let c_code=this.frmStockSearch.get('cStockCode')?.value;
  if(c_code==''){
    alert('please enter Stock Code ddd');
    return;
  }
  //this also worked
  this.stock=new Stock;
  this.stock.stockID=22;
  this.stock.stockCode="z";
  this.stock.stockDescription="zazaa";
  this.stocks=[];
  this.stocks.push(this.stock);
  this.dsSearchStock=this.stocks;
  /*
  let stk=new Stock;
  let sstk = SAMPLE_DATA.find(o => o.stockCode === c_code);
  if(sstk){
    this.stock.stockId=sstk.stockId;
    this.stock.stockCode=sstk.stockCode;
    this.stock.stockDescription=sstk.stockDescription;
    this.stocks=[];
    this.stocks.push(sstk);
    this.dsSearchStock=this.stocks;
    
    alert("Foundsss")
  }
  else{
    alert("Noot Found")
  }
  */

  this.stockService.getByCode(c_code)
    .subscribe(
      data=>{
        this.stock=data; 
          this.stocks=[];
          this.stocks.push(this.stock);
          this.dsSearchStock=this.stocks;
          //*
          this.onOrderStockTransactionsByStockCode(c_code);
          this.onStockBidAskByCodeSide(c_code);
          this.onStockSummariesByCodeSide(c_code);
      },
      error=>{ 
        if(error.status=== 404){
          alert(c_code+" NOT found");
            //*
            this.emptyTables();
        }
        else{
          console.log("ERR==: "+error.status);
        }
      }
    );
  }


getStocksOn(){
  this.dsSearchStock= SAMPLE_DATA;
  // this.dsSearchStock=[];
  // this.stock=new Stock;
  //this.stocks=[];
  //this.stocks.push(this.stock);
  // this.dsSearchStock=this.stocks;
  }
  getStocksOff(){
  this.dsSearchStock= SAMPLE_DATA;
  this.dsSearchStock=[];
  this.stock=new Stock;
  this.stocks=[];
  this.stocks.push(this.stock);
  this.dsSearchStock=this.stocks;
  }
  
  getStocksAll(){
  // for list data
  /*this.dsSearchStock= SAMPLE_DATA;
  this.dsSearchStock=[];
  this.stock=new Stock;
  this.stocks=[];
  this.stocks.push(this.stock);
  this.dsSearchStock=this.stocks;
  */
  
  this.stockService.getAll().subscribe(data => { 
    if(data){
      this.stocks=data;
    }
    else{
      //* for empty row to table
      this.stock=new Stock;
      this.stocks=[];
      this.stocks.push(this.stock);
    }
    this.dsSearchStock=this.stocks;
  },
  error=>{ 
        if(error.status=== 404){
          alert(" No stocks");
          this.stock=new Stock;
          this.stocks=[];
          this.stocks.push(this.stock);
          this.dsSearchStock=this.stocks;
        }
        else{
          console.log("ERR==: "+error.status);
        }
  }
  )
  
}

}


let SAMPLE_DATA: Stock[] = [
{
stockID:1,
stockCode:'X1',
stockDescription:'XAAA'
},
{
stockID:2,
stockCode:'X2',
stockDescription:'XBBB'
},
{
stockID:3,
stockCode:'X3',
stockDescription:'XCCC'
},
];
/* 
export class StockBidAsk {
  numberOfDealers:number;
  price:number;
  size:number;
}
*/







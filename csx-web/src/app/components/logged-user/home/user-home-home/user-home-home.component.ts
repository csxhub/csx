import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Stock } from 'src/app/shared/models/stock';
import { StockBidAsk } from 'src/app/shared/models/stock-bid-ask';
import { StockSummariesAll } from 'src/app/shared/models/stock-summaries-all';
import { EmitterService } from 'src/app/shared/services/emitter.service';
import { StockBidAskService } from 'src/app/shared/services/stock-bid-ask.service';
import { StockSummariesAllService } from 'src/app/shared/services/stock-summaries-all.service';
import { StockService } from 'src/app/shared/services/stock.service';
import {ShareDataServiceService} from 'src/app/shared/share-data-service.service';

@Component({
  selector: 'user-home-home',
  templateUrl: './user-home-home.component.html',
  styleUrls: ['./user-home-home.component.scss']
})
export class UserHomeInquiryComponent implements OnInit {

  loadStockCode(str:string){
   localStorage.setItem('stock_code_stored',str);
  }

  //
  _openHomeHomeStarter=true;
  _openHomeHomeStockDetailed=false;

  viewStockDetailed(){
    this._openHomeHomeStarter=false;
    this._openHomeHomeStockDetailed=true;
  }
  //
  _viewHomeTab=false;
  _viewQuotesTab=false;
  _viewTradeTab=false;


  //
  _openHomeHome=true;
  _openQuotesHome=false;
  _openTradeHome=false;
  _openResearchHome=false;
  _openStreetsmartHome=false;
 
  //*
 // _openHomeInquiry=false;
  _openHomeProducts=false;
  _openHomeInvestorRelations=false;
  _openHomeCareer=false;
  _openHomeMySettings=false;
  _openHomeChangeProfile=false;
  _openHomeDownloads=false;
  _openHomeContactUs=false;
  //*
  dsStockBidColumns=['NumberOfBuyers','Size','Price'];
  dsStockBid: StockBidAsk[];
  dsStockAskColumns=['Price','Size','NumberOfSellers'];
  dsStockAsk: StockBidAsk[];
  displayedColumns = ['stock_id','code','description'];
  dsStocksSummaries: StockBidAsk[];
  
  
  dsSearchStock: Stock[];//SAMPLE_DATA;
  stockBidAsks:StockBidAsk[]=[];
  stockBidAsk:StockBidAsk;
  dsStockSummariesColumns=['Stock','Value','Last','Change','PercChange'];
  dsStockSummaries: StockSummariesAll[];
  

  constructor(private sharedService: ShareDataServiceService,private emitterService: EmitterService,private stockSummariesAllService: StockSummariesAllService ,private stockBidAskService:StockBidAskService,private stockService:StockService,private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.initFrmStockSearch();
    //*
    this.toggleTab('Home');
    //*
    this.getStocksAll();
    //*
    this.getStockSummaries('_active_stocks');
    //*
    localStorage.setItem('stock_code_stored', '');
    //*
    this.emptyTables();
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
  }

  frmStockSearch: FormGroup;
  initFrmStockSearch(){
    this.frmStockSearch = this.formBuilder.group({
      cStockCode: ''
    })
  }
  get frmStockSearchControls() { return this.frmStockSearch.controls; }

  stock:Stock;

  onStockSearch(){
    let c_code=this.frmStockSearch.get('cStockCode')?.value;
    if(c_code==''){
      return;
    }
    
    /*
    this.stock=new Stock;
    this.stock.stockId=22;
    this.stock.stockCode="z";
    this.stock.stockDescription="zazaa";
    this.stocks=[];
    this.stocks.push(this.stock);
    this.dsSearchStock=this.stocks;
    */

    this.stockService.getByCode(c_code)
       .subscribe(
         data=>{
           this.stock=data; 
            this.stocks=[];
            this.stocks.push(this.stock);
            this.dsSearchStock=this.stocks;
         },
         error=>{ 
          if(error.status=== 404){
            alert(c_code+" NOT found");
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

          }
          else{
            console.log("ERR==: "+error.status);
          }
        }
       ); 
       //*
       this.onStockBidAskByCodeSide(c_code); 
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

  //*
  homeOn:boolean = true;
  homeOff:boolean = false;
  quotesOn:boolean = false;
  quotesOff:boolean = true;
  tradeOn:boolean = false;
  tradeOff:boolean = true;
  //*
  activesTabOn=true;
  activesTabOff=false;
  gainersTabOn=false;
  gainersTabOff=true;
  losersTabOn=false;
  losersTabOff=true;
  marketsTabOn=false;
  marketsTabOff=true;
  portfoliosTabOn=false;
  portfoliosTabOff=true;
  //*
  stocksTabMessage:string;



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

  viewStocksTab(str:string){
    if(str==='Actives'){
      this.stocksTabMessage="Most Active Stocks by Value";
      this.activesTabOn=true;
      this.activesTabOff=false;
      this.gainersTabOn=false;
      this.gainersTabOff=true;
      this.losersTabOn=false;
      this.losersTabOff=true;
      this.marketsTabOn=false;
      this.marketsTabOff=true;
      this.portfoliosTabOn=false;
      this.portfoliosTabOff=true;
    }
    else if(str==='Gainers'){
      this.stocksTabMessage="Top Gainers";
      this.activesTabOn=false;
      this.activesTabOff=true;
      this.gainersTabOn=true;
      this.gainersTabOff=false;
      this.losersTabOn=false;
      this.losersTabOff=true;
      this.marketsTabOn=false;
      this.marketsTabOff=true;
      this.portfoliosTabOn=false;
      this.portfoliosTabOff=true;
    }
    else if(str==='Losers'){
      this.stocksTabMessage="Top Losers";
      this.activesTabOn=false;
      this.activesTabOff=true;
      this.gainersTabOn=false;
      this.gainersTabOff=true;
      this.losersTabOn=true;
      this.losersTabOff=false;
      this.marketsTabOn=false;
      this.marketsTabOff=true;
      this.portfoliosTabOn=false;
      this.portfoliosTabOff=true;
    }
    else if(str==='Markets'){
      this.stocksTabMessage="Selected Indices";
      this.activesTabOn=false;
      this.activesTabOff=true;
      this.gainersTabOn=false;
      this.gainersTabOff=true;
      this.losersTabOn=false;
      this.losersTabOff=true;
      this.marketsTabOn=true;
      this.marketsTabOff=false;
      this.portfoliosTabOn=false;
      this.portfoliosTabOff=true;
    }
    else if(str==='Portfolios'){
      this.stocksTabMessage="My Stocks";
      this.activesTabOn=false;
      this.activesTabOff=true;
      this.gainersTabOn=false;
      this.gainersTabOff=true;
      this.losersTabOn=false;
      this.losersTabOff=true;
      this.marketsTabOn=false;
      this.marketsTabOff=true;
      this.portfoliosTabOn=true;
      this.portfoliosTabOff=false;
    }
  }

  toggleTab(str:string) {

    if(str==='Home'){
      this.homeOn=true;
      this.homeOff=false;
      this.quotesOn=false;
      this.quotesOff=true;
      this.tradeOn=false;
      this.tradeOff=true;
      //
      this._viewHomeTab=true;
      this._viewQuotesTab=false;
      this._viewTradeTab=false;
    }
    else if(str==='Quotes'){
      this.homeOn=false;
      this.homeOff=true;
      this.quotesOn=true;
      this.quotesOff=false;
      this.tradeOn=false;
      this.tradeOff=true;
      //
      this._viewHomeTab=false;
      this._viewQuotesTab=true;
      this._viewTradeTab=false; 
    }
    else if(str==='Trade'){
      this.homeOn=false;
      this.homeOff=true;
      this.quotesOn=false;
      this.quotesOff=true;
      this.tradeOn=true;
      this.tradeOff=false;
      //
      this._viewHomeTab=false;
      this._viewQuotesTab=false;
      this._viewTradeTab=true;
    }
  }

  emptyStockCodeStorage(){
    localStorage.setItem('stock_code_stored', '');
  }

  //
  openHome(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openHomeHome=true;
    this._openQuotesHome=false;
    this._openTradeHome=false;
    this._openResearchHome=false;
    this._openStreetsmartHome=false;
  }

  openQuotes(funct:string){
  
    this.emitterService.emitterPartials.emit(funct);
    this._openQuotesHome=true;
    this._openTradeHome=false;
  }

  openTrade(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openQuotesHome=false;
    this._openTradeHome=true;    
  }

  openResearch(funct:string){

  }

  openStreetSmart(funct:string){

  }

  //**
  openHomeHome(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openHomeHome=true;
    this._openHomeProducts=false;
    this._openHomeInvestorRelations=false;
    this._openHomeCareer=false;
    this._openHomeMySettings=false;
    this._openHomeChangeProfile=false;
    this._openHomeDownloads=false;
    this._openHomeContactUs=false;
  }

  openHomeProducts(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openHomeHome=false;
    this._openHomeProducts=true;
    this._openHomeInvestorRelations=false;
    this._openHomeCareer=false;
    this._openHomeMySettings=false;
    this._openHomeChangeProfile=false;
    this._openHomeDownloads=false;
    this._openHomeContactUs=false;
  }

  openHomeInvestorRelations(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openHomeHome=false;
    this._openHomeProducts=false;
    this._openHomeInvestorRelations=true;
    this._openHomeCareer=false;
    this._openHomeMySettings=false;
    this._openHomeChangeProfile=false;
    this._openHomeDownloads=false;
    this._openHomeContactUs=false;
  }

  openHomeCareer(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openHomeHome=false;
    this._openHomeProducts=false;
    this._openHomeInvestorRelations=false;
    this._openHomeCareer=true;
    this._openHomeMySettings=false;
    this._openHomeChangeProfile=false;
    this._openHomeDownloads=false;
    this._openHomeContactUs=false;
  }

  openHomeMySettings(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openHomeHome=false;
    this._openHomeProducts=false;
    this._openHomeInvestorRelations=false;
    this._openHomeCareer=false;
    this._openHomeMySettings=true;
    this._openHomeChangeProfile=false;
    this._openHomeDownloads=false;
    this._openHomeContactUs=false;
  }

  openHomeChangeProfile(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openHomeHome=false;
    this._openHomeProducts=false;
    this._openHomeInvestorRelations=false;
    this._openHomeCareer=false;
    this._openHomeMySettings=false;
    this._openHomeChangeProfile=true;
    this._openHomeDownloads=false;
    this._openHomeContactUs=false;
  }
  
  openHomeDownloads(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openHomeHome=false;
    this._openHomeProducts=false;
    this._openHomeInvestorRelations=false;
    this._openHomeCareer=false;
    this._openHomeMySettings=false;
    this._openHomeChangeProfile=false;
    this._openHomeDownloads=true;
    this._openHomeContactUs=false;
  }

  openHomeContactUs(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openHomeHome=false;
    this._openHomeProducts=false;
    this._openHomeInvestorRelations=false;
    this._openHomeCareer=false;
    this._openHomeMySettings=false;
    this._openHomeChangeProfile=false;
    this._openHomeDownloads=false;
    this._openHomeContactUs=true;
  }
  
  getStockSummaries(detail:string){
  
    this.stockSummariesAllService.getStockSummaries(detail).subscribe(data => { 
      if(data){
        this.stockSummariesAlls=data;
      }
      else{
        //* for empty row to table
        this.stockSummariesAll=new StockSummariesAll;
        this.stockSummariesAlls=[];
        this.stockSummariesAlls.push(this.stockSummariesAll);
      }
      this.dsStockSummaries=this.stockSummariesAlls;
    },
    error=>{ 
          if(error.status=== 404){
            alert(" No stocks");
            this.stockSummariesAll=new StockSummariesAll;
            this.stockSummariesAlls=[];
            this.stockSummariesAlls.push(this.stockSummariesAll);
            this.dsStockSummaries=this.stockSummariesAlls;
          }
          else{
            console.log("ERR==: "+error.status);
          }
    }
    )
  }

  stockSummariesAlls:StockSummariesAll[];
  stockSummariesAll:StockSummariesAll;
  stocks:Stock[]=[];
  getStocksAll(){

    /* for list data
    this.dsSearchStock= SAMPLE_DATA;
    this.dsSearchStock=[];
    this.stock=new Stock;
    this.stocks=[];
    this.stocks.push(this.stock);
    this.dsSearchStock=this.stocks;
    */
    
    this.stockService.getAll().subscribe(data => { 
      if(data){
        this.stocks=data;
        //this.stocks=[];
        //this.stocks.push(this.stock);
        //////this.dsSearchStock=this.stocks;
      }
      else{
        //* for empty row to table
        this.stock=new Stock;
        this.stocks=[];
        this.stocks.push(this.stock);
        //////this.dsSearchStock=this.stocks;
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


/////******

export interface Stocky {
  stockId:number;
  stockCode:string;
  stockDescription:string;
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

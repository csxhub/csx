import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Stock } from 'src/app/shared/models/stock';
import { EmitterService } from 'src/app/shared/services/emitter.service';
import { StockService } from 'src/app/shared/services/stock.service';
import {ShareDataServiceService} from 'src/app/shared/share-data-service.service';

@Component({
  selector: 'user-quotes-home',
  templateUrl: './user-quotes-home.component.html',
  styleUrls: ['./user-quotes-home.component.scss']
})
export class UserQuotesHomeComponent implements OnInit {

  constructor(private sharedService: ShareDataServiceService,private emitterService: EmitterService) { }

  ngOnInit(): void {
    this.openStockInformation('');
  }

  homeOn:boolean = true;
  homeOff:boolean = false;
  quotesOn:boolean = false;
  quotesOff:boolean = true;
  tradeOn:boolean = false;
  tradeOff:boolean = true;

   _openQuotesHome=false;
   _openStockInformation=false;
   _openMarketInformation=false;
   _openBrokerInformation=false;

   displayedColumns = ['stock_id','code','description'];
   dsSearchStock: Stock[];


  openStockInformation(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openQuotesHome=false;
    this._openStockInformation=true;
    this._openMarketInformation=false;
    this._openBrokerInformation=false;
    this.homeOn=true;
    this.homeOff=false;
    this.quotesOn=false;
    this.quotesOff=true;
    this.tradeOn=false;
    this.tradeOff=true;
  }

  openMarketInformation(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openQuotesHome=false;
    this._openStockInformation=false;
    this._openMarketInformation=true;
    this._openBrokerInformation=false;
    this.homeOn=false;
      this.homeOff=true;
      this.quotesOn=true;
      this.quotesOff=false;
      this.tradeOn=false;
      this.tradeOff=true;
  }

  openBrokerInformation(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openQuotesHome=false;
    this._openStockInformation=false;
    this._openMarketInformation=false;
    this._openBrokerInformation=true;
    this.homeOn=false;
      this.homeOff=true;
      this.quotesOn=false;
      this.quotesOff=true;
      this.tradeOn=true;
      this.tradeOff=false;
  }

_openHomeHomeStarter=true;
_openHomeHomeStockDetailed=false;

viewStockDetailed(){
  this._openHomeHomeStarter=false;
  this._openHomeHomeStockDetailed=true;
}

}







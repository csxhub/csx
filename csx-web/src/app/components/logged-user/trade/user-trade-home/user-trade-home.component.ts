import { Component, OnInit } from '@angular/core';
import { EmitterService } from 'src/app/shared/services/emitter.service';

@Component({
  selector: 'user-trade-home',
  templateUrl: './user-trade-home.component.html',
  styleUrls: ['./user-trade-home.component.scss']
})
export class UserTradeHomeComponent implements OnInit {

  //
  _openTradeHome=false;
  _openTradeEnterOrder=false;
  _openTradeViewModifyOrder=false;
  _openTradeTradingHistory=false;
  _openTradePortrfolio=false;
  _openTradeOHOrder=false;
  _openTradeOHViewCancel=false;
  _openTradeEIPScheduler=false;

  constructor(private emitterService: EmitterService) { }

  ngOnInit(): void {
    this.openTradeEnterOrder('');
    
  }


  openTradeHome(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openTradeHome=true;
    this._openTradeEnterOrder=false;
    this._openTradeViewModifyOrder=false;
    this._openTradeTradingHistory=false;
    this._openTradePortrfolio=false;
    this._openTradeOHOrder=false;
    this._openTradeOHViewCancel=false;
    this._openTradeEIPScheduler=false;
  }

  openTradeEnterOrder(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openTradeHome=false;
    this._openTradeEnterOrder=true;
    this._openTradeViewModifyOrder=false;
    this._openTradeTradingHistory=false;
    this._openTradePortrfolio=false;
    this._openTradeOHOrder=false;
    this._openTradeOHViewCancel=false;
    this._openTradeEIPScheduler=false;
  }
  openTradeViewModifyOrder(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openTradeHome=false;
    this._openTradeEnterOrder=false;
    this._openTradeViewModifyOrder=true;
    this._openTradeTradingHistory=false;
    this._openTradePortrfolio=false;
    this._openTradeOHOrder=false;
    this._openTradeOHViewCancel=false;
    this._openTradeEIPScheduler=false;
  }

  openTradeTradingHistory(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openTradeHome=false;
    this._openTradeEnterOrder=false;
    this._openTradeViewModifyOrder=false;
    this._openTradeTradingHistory=true;
    this._openTradePortrfolio=false;
    this._openTradeOHOrder=false;
    this._openTradeOHViewCancel=false;
    this._openTradeEIPScheduler=false;
  }

  openTradePortrfolio(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openTradeHome=false;
    this._openTradeEnterOrder=false;
    this._openTradeViewModifyOrder=false;
    this._openTradeTradingHistory=false;
    this._openTradePortrfolio=true;
    this._openTradeOHOrder=false;
    this._openTradeOHViewCancel=false;
    this._openTradeEIPScheduler=false;
  }

  openTradeOHOrder(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openTradeHome=false;
    this._openTradeEnterOrder=false;
    this._openTradeViewModifyOrder=false;
    this._openTradeTradingHistory=false;
    this._openTradePortrfolio=false;
    this._openTradeOHOrder=true;
    this._openTradeOHViewCancel=false;
    this._openTradeEIPScheduler=false;
  }

  openTradeOHViewCancel(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openTradeHome=false;
    this._openTradeEnterOrder=false;
    this._openTradeViewModifyOrder=false;
    this._openTradeTradingHistory=false;
    this._openTradePortrfolio=false;
    this._openTradeOHOrder=false;
    this._openTradeOHViewCancel=true;
    this._openTradeEIPScheduler=false;
  }

  openTradeEIPScheduler(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openTradeHome=false;
    this._openTradeEnterOrder=false;
    this._openTradeViewModifyOrder=false;
    this._openTradeTradingHistory=false;
    this._openTradePortrfolio=false;
    this._openTradeOHOrder=false;
    this._openTradeOHViewCancel=false;
    this._openTradeEIPScheduler=true;
  }
}

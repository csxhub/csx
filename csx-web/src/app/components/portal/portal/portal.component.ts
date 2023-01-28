import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmitterService } from 'src/app/shared/services/emitter.service';
import { UserTradePreviewOrderComponent } from '../../logged-user/trade/user-trade-preview-order/user-trade-preview-order.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'portal-home',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  
  //
  _openWhyCsx=false;
  _openNewToInvesting=false;
  _openActiveTrading=false
  _openOpenAccount=false
  loginView=false;
  passwordRecoveryView=true;

  questions: any[] = ['What is your city of birth?','What is your best friend nickname?','What is father\'s favorite color?'];


  constructor(private router:Router,private emitterService: EmitterService) { }


  toggle: boolean = true;
  a: boolean = true;
  b: boolean = false;
  c: boolean = true;
  d: boolean = false;

  change() {
    this.toggle = !this.toggle;
  }

  changeone(str:string) {
    alert(str);
    this.a=false;
    this.b=true;
    this.c=true;
    this.d=false;
  }

  changetwo(str:string) {
    alert(str);
    this.c=false;
    this.d=true;
    this.a=true;
    this.b=false;
  }



  ngOnInit(): void {
  }


  logInUser(){
    this.router.navigate(['logged-user-home-Inquiry']);
  }

  forgotPassword(){
    this.loginView=false;
    this.passwordRecoveryView=true;
  }

  logInView(){
    this.loginView=true;
    this.passwordRecoveryView=false;
  }

  //
  openWhyCsx(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openWhyCsx=true;
    this._openNewToInvesting=false;
    this._openActiveTrading=false;
    this._openOpenAccount=false;
  }

  openNewToInvesting(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openWhyCsx=false;
    this._openNewToInvesting=true;
    this._openActiveTrading=false;
    this._openOpenAccount=false;
  }

  openActiveTrading(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openWhyCsx=false;
    this._openNewToInvesting=false;
    this._openActiveTrading=true;
    this._openOpenAccount=false;
  }

  openOpenAccount(funct:string){
    this.emitterService.emitterPartials.emit(funct);
    this._openWhyCsx=false;
    this._openNewToInvesting=false;
    this._openActiveTrading=false;
    this._openOpenAccount=true;
  }

}

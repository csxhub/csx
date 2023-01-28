import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { UserTradePreviewOrderComponent } from '../components/logged-user/trade/user-trade-preview-order/user-trade-preview-order.component';

@Component({
  selector: 'app-diologprac',
  templateUrl: './diologprac.component.html',
  styleUrls: ['./diologprac.component.scss']
})
export class DiologpracComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onPaymentModes(pm:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {payment_mode:pm};
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.width = "455px";
    dialogConfig.panelClass= 'custom-modalbox';
    dialogConfig.position = {left: '100px',top:'opx'};
   
    let dialogRef = this.dialog.open(UserTradePreviewOrderComponent, dialogConfig);
    let retour:boolean;
    dialogRef.afterClosed().pipe(filter((returnedData: any) => returnedData)).subscribe(
      returneData => {
        if(returneData){
          alert("Aii -- "+returneData)
          //this.dlgReturnedPaymentObj.push(returneData);
        }
       // else{
       //   this.dlgReturnedPaymentObj=null;
       // }
      })
  }

}

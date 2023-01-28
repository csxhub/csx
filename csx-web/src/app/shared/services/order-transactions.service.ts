import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderStockTrader } from '../models/order-stock-trader';
import { OrderTransactions } from '../models/order-transactions';



const URL_API = 'http://localhost:8080/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderTransactionsService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<OrderTransactions[]>{
    return this.http.get<OrderTransactions[]>(URL_API + '/csx/order/orderstransactions');
  }

  getByStockCode(code:string): Observable<OrderTransactions[]> {  
    return this.http.get<OrderTransactions[]>(URL_API+ '/csx/order/orderstransactions/' + code);  
  }  
  
}

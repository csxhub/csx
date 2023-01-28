import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderStockTrader } from '../models/order-stock-trader';

const URL_API = 'http://localhost:8080/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderStockTraderService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<OrderStockTrader[]>{
    return this.http.get<OrderStockTrader[]>(URL_API + '/csx/order/ordersstockstraders');
  }

  getByStockCode(code:string): Observable<OrderStockTrader[]> {  
    return this.http.get<OrderStockTrader[]>(URL_API+ '/csx/order/ordersstockstradersbystockcode/' + code);  
  }  
  
}
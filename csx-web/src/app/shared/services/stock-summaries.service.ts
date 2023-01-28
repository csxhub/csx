import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { StockBidAsk } from '../models/stock-bid-ask';
import { StockSummaries } from '../models/stock-summaries';

const URL_API = 'http://localhost:8080/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StockSummariesService {

  constructor(private http:HttpClient) { } ///stockbidask/{code}/{side}

  getAllByCode(code: string): Observable<StockSummaries[]> {  
    return this.http.get<StockSummaries[]>(URL_API+ '/csx/stock/stocksummaries/' + code);  
  }   

  getAll(): Observable<Stock[]>{
    return this.http.get<Stock[]>(URL_API + '/csx/stock/');
  }

  getById(id: number): Observable<Stock> {  
    return this.http.get<Stock>(URL_API+ '/csx/stock/' + id);  
  } 
  getByCode(code: string): Observable<Stock> {  
    return this.http.get<Stock>(URL_API+ '/csx/stock/bycode/' + code);  
  }  
  create(obj: Stock): Observable<Stock> {  
    return this.http.post<Stock>(URL_API+ '/csx/stock/',obj, httpOptions);  
  }  
  update(id:number,obj: Stock): Observable<Stock> {  
    return this.http.put<Stock>(URL_API+ '/csx/stock/' +id,obj, httpOptions);  
  }  
  deleteById(id: number): Observable<Boolean> {  
    return this.http.delete<Boolean>(URL_API+ '/csx/stock/' +id,httpOptions);  
  }  
}
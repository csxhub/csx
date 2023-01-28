import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { StockSummaries } from '../models/stock-summaries';
import { StockSummariesAll } from '../models/stock-summaries-all';

const URL_API = 'http://localhost:8080/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StockSummariesAllService {

  constructor(private http:HttpClient) { } ///stockbidask/{code}/{side}

  getAllByCode(code: string): Observable<StockSummariesAll[]> {  
    return this.http.get<StockSummariesAll[]>(URL_API+ '/csx/stock/stocksummaries/_all_stocks' + code);  
  }  

  getStockSummaries(detail:string): Observable<StockSummariesAll[]>{
    return this.http.get<StockSummariesAll[]>(URL_API + '/csx/stock/stocksummaries/_all_stocks/'+detail);
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
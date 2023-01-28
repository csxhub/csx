import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';

const URL_API = 'http://localhost:8080/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }

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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trader } from '../models/trader';

const URL_API = 'http://localhost:8080/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TraderService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Trader[]>{
    return this.http.get<Trader[]>(URL_API + '/csx/trader/');
  }

  getById(id: number): Observable<Trader> {  
    return this.http.get<Trader>(URL_API+ '/csx/trader/' + id);  
  }  
  create(obj: Trader): Observable<Trader> {  
    return this.http.post<Trader>(URL_API+ '/csx/trader/',obj, httpOptions);  
  }  
  update(id:number,obj: Trader): Observable<Trader> {  
    return this.http.put<Trader>(URL_API+ '/csx/trader/' +id,obj, httpOptions);  
  }  
  deleteById(id: number): Observable<Boolean> {  
    return this.http.delete<Boolean>(URL_API+ '/csx/trader/' +id,httpOptions);  
  }  
}
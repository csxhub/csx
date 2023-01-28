import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

const URL_API = 'http://localhost:8080/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Order[]>{
    return this.http.get<Order[]>(URL_API + '/csx/order/');
  }

  getById(id: number): Observable<Order> {  
    return this.http.get<Order>(URL_API+ '/csx/order/' + id);  
  }  
  create(obj: Order): Observable<Order> {  
    alert("OOO--"+obj.order_time);
    return this.http.post<Order>(URL_API+ '/csx/order/',obj, httpOptions);  
  }  
  update(id:number,obj: Order): Observable<Order> {  
    return this.http.put<Order>(URL_API+ '/csx/order/' +id,obj, httpOptions);  
  }  
  deleteById(id: number): Observable<Boolean> {  
    return this.http.delete<Boolean>(URL_API+ '/csx/order/' +id,httpOptions);  
  }  
}
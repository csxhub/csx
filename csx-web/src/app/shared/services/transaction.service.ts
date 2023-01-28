import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

const URL_API = 'http://localhost:8080/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(URL_API + '/csx/trader/');
  }

  getById(id: number): Observable<Transaction> {  
    return this.http.get<Transaction>(URL_API+ 'categories/' + id);  
  }  
  create(obj: Transaction): Observable<Transaction> {  
    return this.http.post<Transaction>(URL_API+ 'categories',obj, httpOptions);  
  }  
  update(id:number,obj: Transaction): Observable<Transaction> {  
    return this.http.put<Transaction>(URL_API+ 'categories/' +id,obj, httpOptions);  
  }  
  deleteById(id: number): Observable<Boolean> {  
    return this.http.delete<Boolean>(URL_API+ 'categories/' +id,httpOptions);  
  }  
}
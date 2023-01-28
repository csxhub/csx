import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  constructor() { }

  emitterPartials=new EventEmitter<any>();
  
}

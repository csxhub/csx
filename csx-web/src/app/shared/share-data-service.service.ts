import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';


/*
@Injectable({
  providedIn: 'root'
})
export class ShareDataServiceService {

  constructor() { }
}
*/

@Injectable()
export class ShareDataServiceService {

  private sharedData: Subject<any> = new Subject<any>();
  sharedData$: Observable<any> = this.sharedData.asObservable();

  constructor() { }

  setData(updatedData: any) {
    this.sharedData.next(updatedData);
  }

}

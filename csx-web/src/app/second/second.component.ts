import { Component, OnInit } from '@angular/core';
import {ShareDataServiceService} from 'src/app/shared/share-data-service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  sharedData: string;

  constructor(private sharedService: ShareDataServiceService) { }

  ngOnInit() {
    this.sharedService.sharedData$
      .subscribe(sharedData => this.sharedData = sharedData);
  }

}
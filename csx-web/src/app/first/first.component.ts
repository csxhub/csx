import { Component, OnInit } from '@angular/core';
import {ShareDataServiceService} from 'src/app/shared/share-data-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  data = 'Initial Data';
  sharedData: string;

  constructor(private sharedService: ShareDataServiceService) { }

  ngOnInit() {
    this.sharedService.sharedData$
      .subscribe(sharedData => this.sharedData = sharedData);
  }

  updateData() {
    this.sharedService.setData(this.data);
  }

}
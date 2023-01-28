import { TestBed } from '@angular/core/testing';

import { StockBidAskService } from './stock-bid-ask.service';

describe('StockBidAskService', () => {
  let service: StockBidAskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockBidAskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

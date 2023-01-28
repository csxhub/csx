import { TestBed } from '@angular/core/testing';

import { OrderStockTraderService } from './order-stock-trader.service';

describe('OrderStockTraderService', () => {
  let service: OrderStockTraderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderStockTraderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

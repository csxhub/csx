import { TestBed } from '@angular/core/testing';

import { OrderTransactionsService } from './order-transactions.service';

describe('OrderTransactionsService', () => {
  let service: OrderTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

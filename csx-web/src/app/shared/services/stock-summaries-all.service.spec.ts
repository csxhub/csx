import { TestBed } from '@angular/core/testing';

import { StockSummariesAllService } from './stock-summaries-all.service';

describe('StockSummariesAllService', () => {
  let service: StockSummariesAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockSummariesAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

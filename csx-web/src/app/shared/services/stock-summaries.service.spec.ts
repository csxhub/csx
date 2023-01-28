import { TestBed } from '@angular/core/testing';

import { StockSummariesService } from './stock-summaries.service';

describe('StockSummariesService', () => {
  let service: StockSummariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockSummariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

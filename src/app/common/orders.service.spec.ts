import { TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[OrdersService]
    })
  });

  it('should be created', () => {
    const service: OrdersService = TestBed.get(OrdersService);
    expect(service).toBeTruthy();
  });
});

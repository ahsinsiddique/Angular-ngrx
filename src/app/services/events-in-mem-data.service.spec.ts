import { TestBed } from '@angular/core/testing';

import { EventsInMemDataService } from './events-in-mem-data.service';

describe('EventsInMemDataService', () => {
  let service: EventsInMemDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsInMemDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

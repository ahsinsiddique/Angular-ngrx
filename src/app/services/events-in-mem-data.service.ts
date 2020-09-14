import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})

export class EventsInMemDataService implements InMemoryDbService {

  createDb() {
    let events: Event[] = [
      {id: 1, name: 'event1', address: 'new york', date: '10/2/2020' },
      { id: 2, name: 'event2', address: 'new york', date: '10/2/2020' },
      { id: 3, name: 'event3', address: 'new york', date: '10/2/2020' },

    ];
    return {events};
  }
}

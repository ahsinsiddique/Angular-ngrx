import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _eventsArr = new Array<Event>();

  constructor() {
    this._eventsArr.push({ name: 'event1', address: 'new york', date: '10/2/2020' });
    this._eventsArr.push({ name: 'event2', address: 'new york', date: '10/2/2020' });
    this._eventsArr.push({ name: 'event3', address: 'new york', date: '10/2/2020' });
  }

  getEvents(): Observable<Array<Event>> {
    return of(this.eventsArr);
  }

  get eventsArr(): Event[] {
    return this._eventsArr;
  }

  set eventsArr(value: Event[]) {
    this._eventsArr = value;
  }
  addNewEvent(event: Event) {
    if (event &&  this.eventsArr.indexOf(event) < 0) {
      this.eventsArr.push(event)
    }
  }

}

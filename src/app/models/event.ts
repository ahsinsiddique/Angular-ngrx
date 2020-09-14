import { Observable } from 'rxjs/internal/Observable';

export class Event {
  id: number;
  name: string;
  address: string;
  date: string;

  constructor(id = 0, name = '', address = '', date = '') { }

}


export abstract class EventsInterface{
  eventsUrl = 'api/events';

  abstract getAllEvents(): Observable<Event[]>;
  abstract addEvent(event: Event): Observable<Event>;

}

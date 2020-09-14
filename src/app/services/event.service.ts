import { Injectable } from '@angular/core';
import { Event, EventsInterface } from '../models/event';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class EventService extends EventsInterface {
  constructor(private http: HttpClient) {super();}

  private _eventsArr = new Array<Event>();

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
    if (event && this.eventsArr && this.eventsArr.indexOf(event) < 0) {
      this.eventsArr.push(event);
    }
  }

  getAllEvents(): Observable<Event[]> {
    const url = `${this.eventsUrl}`;
    return this.http.get<Event[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  addEvent(event: Event): Observable<Event> {

    return this.http.post<Event>(this.eventsUrl, event, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

}

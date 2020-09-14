import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EventService } from '../services/event.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AddEventSuccess, EventsActionType, GetEventFailed, GetEventSuccess } from './event.actions';
import { of } from 'rxjs/internal/observable/of';
import { Event } from '../models/event';


@Injectable()
export class EventsEffects {

  constructor(
    private actions$: Actions,
    private eventService: EventService
  ) { }

  @Effect()
  getEvents$ = this.actions$.pipe(
    ofType(EventsActionType.GET_Events),
    switchMap(() =>
      this.eventService.getAllEvents().pipe(
        map((events: Array<Event>) => new GetEventSuccess(events)),
        catchError(error => of(new GetEventFailed(error)))
      )
    )
  );

  @Effect()
  addEvents$ = this.actions$.pipe(
    ofType(EventsActionType.ADD_Events),
    switchMap((action: any) =>
      this.eventService.addEvent(action.payload).pipe(
        map((event: Event) => new AddEventSuccess(event)),
        catchError(error => of(new GetEventFailed(error)))
      )
    )
  );

}

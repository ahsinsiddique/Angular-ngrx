import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EventService } from '../services/event.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EventsActionType, GetEventFailed, GetEventSuccess } from './event.actions';
import { of } from 'rxjs/internal/observable/of';
import { Event } from '../models/event';


@Injectable()
export class EventsEffects {

  constructor(
    private actions$: Actions,
    private eventService: EventService
  ) { }

  @Effect()
  getTodos$ = this.actions$.pipe(
    ofType(EventsActionType.GET_Events),
    switchMap(() =>
      this.eventService.getEvents().pipe(
        map((events: Array<Event>) => new GetEventSuccess(events)),
        catchError(error => of(new GetEventFailed(error)))
      )
    )
  );

}

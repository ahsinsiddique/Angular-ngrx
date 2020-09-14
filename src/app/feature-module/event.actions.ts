import { Action } from '@ngrx/store';
import { Event } from '../models/event';

export enum EventsActionType {
  GET_Events = 'GET_Events',
  ADD_Events = 'ADD_Events',
  GET_Events_SUCCESS = 'GET_Events_SUCCESS',
  GET_Events_FAILED = 'GET_Events_FAILED'
}

export class GetEvent implements Action {
  readonly type = EventsActionType.GET_Events;
}

export class AddEvent implements Action {
  readonly type = EventsActionType.ADD_Events;
  constructor(public payload: Event) { }
}

export class GetEventSuccess implements Action {
  readonly type = EventsActionType.GET_Events_SUCCESS;

  constructor(public payload: Array<Event>) { }
}

export class GetEventFailed implements Action {
  readonly type = EventsActionType.GET_Events_FAILED;

  constructor(public payload: string) { }
}

export type EventsActions = GetEvent |
  AddEvent |
  GetEventSuccess |
  GetEventFailed;

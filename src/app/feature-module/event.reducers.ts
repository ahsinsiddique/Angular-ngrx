import { EventsActions, EventsActionType } from './event.actions';

export const initialState = { events: [] };

export function eventReducer(state = initialState, action: EventsActions) {

  switch (action.type) {

    case EventsActionType.GET_Events: {
      return { ...state };
    }

    case EventsActionType.ADD_Events: {
      return {
        ...state
      };
    }
    case EventsActionType.ADD_Events_SUCCESS: {
      return {
        events: action.payload,
        ...state
      };
    }
    case EventsActionType.GET_Events_SUCCESS: {
      return {
        ...state,
        events: action.payload,
      };
    }

    case EventsActionType.GET_Events_FAILED: {
      return { ...state };
    }
  }
}

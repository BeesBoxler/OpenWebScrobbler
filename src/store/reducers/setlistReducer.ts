import { Action } from 'store';

export enum SetlistAction {
  GetSetlists = 'GET_SETLISTS',
  GetSetlistsPending = 'GET_SETLISTS_PENDING',
  GetSetlistsFulfilled = 'GET_SETLISTS_FULFILLED',
  GetSetlistsRejected = 'GET_SETLISTS_REJECTED',
  SetSetlist = 'SET_SETLISTS',
}

export type Setlist = {
  id: string,
  venue: string,
  date: string,
  artist: string,
  tracks: string[],
}

export type SetlistState = {
  list: Setlist[],
  info?: Setlist
}

const initialState: SetlistState = {
  list: [],
};

export const setlistReducer = (state = initialState, action: Action<SetlistAction>): SetlistState => {
  switch (action.type) {
    case SetlistAction.GetSetlistsFulfilled:
      return {
        ...state,
        list: action.payload,
      };
    case SetlistAction.SetSetlist:
      return {
        ...state,
        info: action.payload,
      };
  };

  return state;
};

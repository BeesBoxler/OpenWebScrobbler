import { Setlist, SetlistAction } from 'store/reducers/setlistReducer';
import { artistGetSetlist } from 'utils/clients/setlistfm/methods/artistGetSetlist';
import { Action } from 'store';

export function getSetlists(artist: { mbid?: string }): Action<SetlistAction> {
  return {
    type: SetlistAction.GetSetlists,
    payload: artistGetSetlist(artist.mbid),
  };
};

export function setSetlist(setlist: Setlist): Action<SetlistAction> {
  return {
    type: SetlistAction.SetSetlist,
    payload: setlist,
  };
}

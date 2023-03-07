import get from 'lodash/get';
import { Setlist } from 'store/reducers/setlistReducer';
import { sanitizeArtistName } from 'utils/clients/discogs/transformers/common/sanitizeArtistName';

export function artistGetSetlistTransformer(response: any): Setlist[] {
  if (!response.data || response?.data.message) {
    return [];
  }

  const transformSetlistTracks = (setlist: any) => {
    return setlist.sets.set.flatMap(set => {
      return set.song.map(song => {
        return song.name;
      });
    });
  };

  const setlists = get(response, 'data.setlist', []);

  return setlists.map(setlist => {
    return {
      id: setlist.id,
      date: setlist.eventDate,
      venue: setlist.venue.name,
      artist: sanitizeArtistName(setlist.artist.name),
      songs: transformSetlistTracks(setlist),
    };
  });
};

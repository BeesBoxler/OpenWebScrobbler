import { Setlist } from 'store/reducers/setlistReducer';
import { setlistfmAPI } from '../apiClient';
import { artistGetSetlistTransformer } from '../transformers/artistGetSetlistResponse.transformer';

export async function artistGetSetlist(mbid: string): Promise<Setlist[]> {
  const response = await setlistfmAPI.get('', {
    params: {
      method: 'artist.getSetlist',
      mbid,
    },
  });

  return artistGetSetlistTransformer(response);
}

import { SetlistCard } from 'components/SetlistCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Spinner } from 'reactstrap';
import { State } from 'store';
import { getSetlists, setSetlist } from 'store/actions/setlistActions';
import { Setlist } from 'store/reducers/setlistReducer';

export default function SetlistResults({ query }: {query: {mbid?: string}}) {
  const dispatch = useDispatch();
  const setlists = useSelector<State>((state) => state.setlist.list) as Setlist[];

  useEffect(() => {
    if (query && query.mbid) {
      dispatch(getSetlists(query));
    }
  }, [query]);

  const selectSetlist = (setlist) => {
    dispatch(setSetlist(setlist));
  };

  return setlists
    ? (
      <Row>
        {setlists.map(setlist => <SetlistCard className='' setlist={setlist} onClick={() => selectSetlist(setlist)} />)}
      </Row>
      )
    : <Spinner/>;
}

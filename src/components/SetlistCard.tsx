import './SetlistCard.css';

export const SetlistCard = ({ setlist, className, onClick }) => (
  <div className={`setlist ${className} my-2 py-2 rounded`}>
    <a href={setlist.url} className="ms-2 d-flex h-100 align-items-center" data-setlist-id={setlist.id} onClick={onClick}>
      <span className="setlist-name ps-3">{`${setlist.date} @ ${setlist.venue}`}</span>
    </a>
  </div>
);

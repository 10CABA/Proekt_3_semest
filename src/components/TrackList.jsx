import { formatTime } from '../utils/formatTime.js'

export default function TrackList({ tracks, onLike }) {
  if (!tracks || tracks.length === 0) {
    return <p className="track-list__empty">No tracks yet</p>
  }

  return (
    <ul className="track-list">
      {tracks.map((track, index) => (
        <li key={track.id} className="track-list__row">
          <span className="track-list__num">{index + 1}</span>

          <img
            src={track.cover}
            alt=""
            className="track-list__cover"
          />

          <div className="track-list__meta">
            <span className="track-list__title">{track.title}</span>
            <span className="track-list__artist">{track.artist}</span>
          </div>

          <button
            className="track-list__like"
            onClick={() => onLike(track.id)}
            aria-label={track.liked ? 'Remove Like' : 'Add Like'}
          >
            <img
              src={track.liked ? '/icons/heart-filled.png' : '/icons/heart-outline.png'}
              alt=""
              className="track-list__like-icon"
            />
          </button>

          <span className="track-list__duration">{formatTime(track.duration)}</span>
        </li>
      ))}
    </ul>
  )
}
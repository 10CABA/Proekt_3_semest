import { formatTime } from '../utils/formatTime.js'

export default function TrackList({ tracks, onLike, onPlay, currentTrackId, isPlaying }) {
  if (!tracks || tracks.length === 0) {
    return <p className="track-list__empty">No tracks yet</p>
  }

  return (
    <ul className="track-list">
      {tracks.map((track, index) => {
        const isCurrent = track.id === currentTrackId

        return (
          <li
            key={track.id}
            className={
              'track-list__row'+(isCurrent ? ' track-list__row--current' : '')
            }
            onDoubleClick={() => onPlay(track.id)}
          >
            <span className="track-list__num">
              {isCurrent && isPlaying ? '⏸️' : index + 1}
            </span>

            <img
              src={track.cover}
              alt=""
              className="track-list__cover"
              onError={(e) => { e.currentTarget.style.opacity = 0.2 }}
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
        )
      })}
    </ul>
  )
}
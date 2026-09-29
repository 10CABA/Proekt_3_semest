import { usePlayer } from '../Context/PlayerContext.jsx'
import TrackList from '../components/TrackList.jsx'

export default function HomePage() {
  const { tracks, toggleLike, playTrack, currentTrackId, isPlaying } = usePlayer()

  return (
    <>
      <h1 className="page-title">Home</h1>
      <TrackList
        tracks={tracks}
        onLike={toggleLike}
        onPlay={playTrack}
        currentTrackId={currentTrackId}
        isPlaying={isPlaying}
      />
    </>
  )
}
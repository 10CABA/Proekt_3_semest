import { usePlayer } from '../Context/PlayerContext.jsx'
import TrackList from '../components/TrackList.jsx'

export default function FavoritesPage() {
  const { tracks, toggleLike, playTrack, currentTrackId, isPlaying } = usePlayer()

  const favoriteTracks = tracks.filter((track) => track.liked === true)

  return (
    <>
      <h1 className="page-title">Favorites</h1>
      <TrackList
        tracks={favoriteTracks}
        onLike={toggleLike}
        onPlay={playTrack}
        currentTrackId={currentTrackId}
        isPlaying={isPlaying}
      />
    </>
  )
}
import { useState } from 'react'
import TrackList from '../components/TrackList.jsx'
import { initialTracks } from '../data/initialTracks.js'

export default function FavoritesPage() {
  const [tracks, setTracks] = useState(initialTracks)

  function handleLike(id) {
    const updatedTracks = tracks.map(function (track) {
      if (track.id !== id) {
        return track
      }

      const updatedTrack = {
        id: track.id,
        title: track.title,
        artist: track.artist,
        audioSrc: track.audioSrc,
        cover: track.cover,
        liked: !track.liked,
      }

      if (track.duration) {
        updatedTrack.duration = track.duration
      }

      return updatedTrack
    })

    setTracks(updatedTracks)
  }

  const favoriteTracks = tracks.filter(function (track) {
    return track.liked === true
  })

  return (
    <>
      <h1 className="page-title">Favorites</h1>
      <TrackList tracks={favoriteTracks} onLike={handleLike} />
    </>
  )
}
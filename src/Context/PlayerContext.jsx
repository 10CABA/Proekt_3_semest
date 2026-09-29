import { createContext, useContext, useState, useRef, useEffect, use } from 'react'
import { initialTracks } from '../data/initialTracks.js'
const PlayerContext = createContext(null)

export function PlayerProvider({ children }) {
    const [tracks, setTracks] = useState(initialTracks)
    const [currentTrackId, setCurrentTrackId] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [volume, setVolume] = useState(1)
    const currentTrack = tracks.find((track) => track.id === currentTrackId) || null
    const audioRef = useRef(null)


    function playTrack(id) {
        setCurrentTrackId(id)
        setIsPlaying(true)
    }

    function togglePlay() {
        if (!currentTrackId) return
        setIsPlaying((prev) => !prev)
    }

    function nextTrack() {
        if (!currentTrackId) return
        const index = tracks.findIndex((t) => t.id === currentTrackId)
        const nextIndex = (index + 1) % tracks.length
        setCurrentTrackId(tracks[nextIndex].id)
        setIsPlaying(true)
    }

    function prevTrack() {
        if (!currentTrackId) return
        const index = tracks.findIndex((t) => t.id === currentTrackId)
        const prevIndex = (index - 1 + tracks.length) % tracks.length
        setCurrentTrackId(tracks[prevIndex].id)
        setIsPlaying(true)
    }

    function seek(seconds) {
      if (audioRef.current) {
        audioRef.current.currentTime = seconds
        setProgress(seconds)
      }
    }

    function toggleLike(id) {
        setTracks((prev) =>
          prev.map((track) => {
            if (track.id !== id) return track
            return { ...track, liked: !track.liked }
          })
        )
    }

    function trackEnd() {
      nextTrack()
    }

    useEffect(() => {setProgress(0)}, [currentTrackId])
    useEffect(() => {
        if (audioRef.current) {
          audioRef.current.volume = volume
        }
    }, [volume])

    const value = {
        tracks, currentTrack, currentTrackId,
        isPlaying, progress, volume, audioRef,
        playTrack, togglePlay, nextTrack, prevTrack,
        seek, toggleLike, trackEnd,
        setProgress, setVolume,
      }

      return (
        <PlayerContext.Provider value={value}>
          {children}
        </PlayerContext.Provider>
      )
}

export function usePlayer() {
  const context = useContext(PlayerContext)
  if (!context) {throw Error("error")}
  return context
}
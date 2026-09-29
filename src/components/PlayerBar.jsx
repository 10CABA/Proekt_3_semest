export default function PlayerBar() {
    return <footer className="player-bar">PlayerBar</footer>
}


import { PlayerProvider } from './Context/PlayerContext.jsx'
import { formatTime } from '../utils/formatTime.js'

export default function PlayerBar() {
  const {
    currentTrack, isPlaying, progress, volume, audioRef,
    togglePlay, nextTrack, prevTrack, seek, setVolume,
    setProgress, handleTrackEnd
  } = PlayerProvider()

  function timeUpd() {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime)
    }
  }
}
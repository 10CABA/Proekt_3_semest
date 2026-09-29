/*export default function PlayerBar() {
    return <footer className="player-bar">PlayerBar</footer>
}*/


import { usePlayer } from '../Context/PlayerContext.jsx'
import { formatTime } from '../utils/formatTime.js'

export default function PlayerBar() {
  const {
    currentTrack, isPlaying, progress, volume, audioRef,
    togglePlay, nextTrack, prevTrack, seek, setVolume,
    setProgress, trackEnd
  } = usePlayer()

  function timeUpd() {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime)
    }
  }

  function progressClick(e) {
    if (!audioRef.current) {return}
    const rectangle = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rectangle.left
    const percent = clickX / rectangle.width
    const newTime = percent * audioRef.current.duration
    seek(newTime)
  }

  function volumeChange(e) {
    setVolume(Number(e.target.value))
  }

  const duration = audioRef.current?.duration || 0
  const progressPercent = (progress/duration) * 100 || 0

  return (
    <footer className="player-bar">
      <audio
        ref = {audioRef}
        src = {currentTrack?.audioSrc}
        onTimeUpdate = {timeUpd}
        onEnded = {trackEnd}
       />

     <div className="player-bar__info">
      
    </div>

    <div className="player-bar__center">
        <div className="player-bar__controls">
          <button className="player-bar__btn" onClick={prevTrack} aria-label="Назад">
            ⏮
          </button>
          <button
            className="player-bar__btn player-bar__btn--play"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className="player-bar__btn" onClick={nextTrack} aria-label="Next">
            ⏭
          </button>
        </div>

        <div className="player-bar__progress-wrap">
          <span className="player-bar__time">{formatTime(progress)}</span>
          <div className="player-bar__progress" onClick={progressClick}>
            <div
              className="player-bar__progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="player-bar__time">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="player-bar__right">
        <span className="player-bar__volume-icon">🔊</span>
        <input
          type="range"
          min="0"
          max="1"
          value={volume}
          onChange={volumeChange}
          className="player-bar__volume"
        />
      </div>
    </footer>
   )
}
export function formatTime(seconds) {
    if (typeof seconds !== 'number' || !Number.isFinite(seconds) || seconds < 0) {return ''}
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60)
    const secondsStr = String(s).padStart(2, '0')
    return `${m}:${secondsStr}`
}
export function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60)
    if (s < 10) {s = '0' + s}
    return m + ':' + s
}
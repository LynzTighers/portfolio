import { useEffect } from 'react'

// Short "match found" splash on first visit. Click or any key skips it.
export default function MatchFound({ onDone }) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = setTimeout(onDone, reduced ? 600 : 2200)
    window.addEventListener('keydown', onDone)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', onDone)
    }
  }, [onDone])

  return (
    <div className="match-found" onClick={onDone} role="presentation">
      <div className="match-found__band">
        <span className="match-found__eyebrow">Competitive // Portfolio</span>
        <h1 className="match-found__title">Match Found</h1>
        <div className="match-found__bar"><span /></div>
      </div>
      <p className="match-found__skip">Click or press any key to skip</p>
    </div>
  )
}

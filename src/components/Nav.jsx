import { useEffect, useState } from 'react'
import { agent } from '../data/profile.js'

const sections = [
  { id: 'play', label: 'Play' },
  { id: 'agent', label: 'Agent' },
  { id: 'arsenal', label: 'Arsenal' },
  { id: 'matches', label: 'Match History' },
  { id: 'invite', label: 'Invite' },
]

export default function Nav() {
  const [active, setActive] = useState('play')
  const [open, setOpen] = useState(false)

  // Highlight the last section whose top has passed 40% of the screen height.
  useEffect(() => {
    function update() {
      const line = window.innerHeight * 0.4
      let current = sections[0].id
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top <= line) current = s.id
      }
      // at the very bottom the short last section may never reach the line
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = sections[sections.length - 1].id
      }
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <header className="nav">
      <a href="#play" className="nav__brand" onClick={() => setOpen(false)}>
        <span className="nav__mark" aria-hidden="true" />
        {agent.callsign}
      </a>
      <button
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'Close' : 'Menu'}
      </button>
      <nav id="nav-links" className={`nav__links${open ? ' is-open' : ''}`}>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={active === s.id ? 'is-active' : ''}
            onClick={() => setOpen(false)}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

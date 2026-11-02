import { useState } from 'react'
import { matches } from '../data/profile.js'
import SectionHeader from './SectionHeader.jsx'

export default function MatchHistory() {
  const [open, setOpen] = useState(0)

  return (
    <section id="matches" className="section">
      <SectionHeader index="03" title="Match History" note="Projects, newest first" />

      <ol className="matches">
        {matches.map((m, i) => {
          const isOpen = open === i
          return (
            <li key={m.title} className={`match match--${m.status}${isOpen ? ' is-open' : ''}`}>
              <button
                className="match__row"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="match__result">{m.result}</span>
                <span className="match__title">
                  {m.title}
                  <small>{m.map}</small>
                </span>
                <span className="match__stats">
                  {m.stats.map((s) => (
                    <span key={s.label}>
                      <b>{s.value}</b>
                      {s.label}
                    </span>
                  ))}
                </span>
                <span className="match__chevron" aria-hidden="true" />
              </button>

              {isOpen && (
                <div className="match__details">
                  <p className="match__summary">{m.summary}</p>
                  <ul>
                    {m.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {m.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  {m.links.length > 0 && (
                    <div className="match__links">
                      {m.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn btn--small">
                          <span>{l.label} ↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}

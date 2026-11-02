import { useState } from 'react'
import { arsenal } from '../data/profile.js'
import SectionHeader from './SectionHeader.jsx'

function StatBar({ label, value }) {
  return (
    <div className="stat">
      <div className="stat__head">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="stat__track">
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

export default function Arsenal() {
  const [selected, setSelected] = useState(arsenal[0].items[0])

  return (
    <section id="arsenal" className="section section--alt">
      <SectionHeader index="02" title="Arsenal" note="Languages, frameworks and tools" />

      <div className="arsenal">
        <div className="arsenal__slots">
          {arsenal.map((slot) => (
            <div key={slot.slot} className="slot">
              <h3 className="label">
                {slot.slot} <small>// {slot.note}</small>
              </h3>
              <div className="slot__grid">
                {slot.items.map((item) => (
                  <button
                    key={item.name}
                    className={`weapon${selected.name === item.name ? ' is-selected' : ''}`}
                    onClick={() => setSelected(item)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <aside className="inspect" aria-live="polite">
          <span className="label">Inspecting</span>
          <h3 key={selected.name}>{selected.name}</h3>
          <p>{selected.detail}</p>
          <StatBar label="Proficiency" value={selected.proficiency} />
          <StatBar label="Usage" value={selected.usage} />
        </aside>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { agent, abilities } from '../data/profile.js'
import SectionHeader from './SectionHeader.jsx'

export default function Dossier() {
  const [selected, setSelected] = useState(0)
  const ability = abilities[selected]

  return (
    <section id="agent" className="section">
      <SectionHeader index="01" title="Agent Dossier" note="Biography and abilities" />

      <div className="dossier">
        <div className="dossier__card">
          <div className="dossier__portrait" aria-hidden="true">
            <span>{agent.callsign.slice(0, 2)}</span>
          </div>
          <dl className="dossier__facts">
            {agent.name && <div><dt>Real name</dt><dd>{agent.name}</dd></div>}
            <div><dt>Role</dt><dd>{agent.agentClass}</dd></div>
            <div><dt>Specialty</dt><dd>{agent.role}</dd></div>
            {agent.origin && <div><dt>Origin</dt><dd>{agent.origin}</dd></div>}
            {agent.facts.map((f) => (
              <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
            ))}
          </dl>
        </div>

        <div className="dossier__body">
          <h3 className="label">Biography</h3>
          {agent.bio.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}

          <h3 className="label">Abilities</h3>
          <div className="abilities" role="tablist" aria-label="Abilities">
            {abilities.map((a, i) => (
              <button
                key={a.key}
                role="tab"
                aria-selected={i === selected}
                className={`ability${i === selected ? ' is-selected' : ''}${a.ult ? ' ability--ult' : ''}`}
                onClick={() => setSelected(i)}
              >
                <kbd><span>{a.key}</span></kbd>
                <span>{a.name}</span>
              </button>
            ))}
          </div>
          <div className="ability-detail" role="tabpanel" key={ability.key}>
            <h4>
              {ability.name}
              {ability.ult && <span className="ult-pips" aria-label="Ultimate">{'◆'.repeat(7)}</span>}
            </h4>
            <p>{ability.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

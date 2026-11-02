import { agent, matches, arsenal } from '../data/profile.js'

export default function Hero() {
  const weaponCount = arsenal.reduce((n, slot) => n + slot.items.length, 0)

  return (
    <section id="play" className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <span className="hero__ghost">{agent.callsign}</span>
        <span className="hero__slash" />
      </div>

      <div className="hero__content">
        <p className="eyebrow">
          <span className="dot" /> Agent // {agent.agentClass}
        </p>
        <h1 className="hero__title">
          {agent.callsign}
          <span>{agent.role}</span>
        </h1>
        <p className="hero__tagline">{agent.tagline}</p>
        <div className="hero__actions">
          <a href="#matches" className="btn btn--primary">
            <span>Lock In</span>
          </a>
          <a href="#agent" className="btn btn--ghost">
            <span>View Dossier</span>
          </a>
        </div>
      </div>

      <dl className="hud">
        <div>
          <dt>Matches</dt>
          <dd>{String(matches.length).padStart(2, '0')}</dd>
        </div>
        <div>
          <dt>Loadout</dt>
          <dd>{String(weaponCount).padStart(2, '0')}</dd>
        </div>
        <div>
          <dt>Season</dt>
          <dd>{new Date().getFullYear()}</dd>
        </div>
      </dl>
    </section>
  )
}

import { agent } from '../data/profile.js'
import SectionHeader from './SectionHeader.jsx'

export default function Contact() {
  const { github, email, resume } = agent.links

  return (
    <section id="invite" className="section section--alt">
      <SectionHeader index="04" title="Party Invite" note="Looking for a team" />

      <div className="invite">
        <p className="invite__lead">
          Open to internships, junior roles and interesting side quests. Send an invite and I'll queue up.
        </p>
        <div className="invite__actions">
          {email && (
            <a href={`mailto:${email}`} className="btn btn--primary">
              <span>Send Invite</span>
            </a>
          )}
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className={`btn ${email ? 'btn--ghost' : 'btn--primary'}`}
          >
            <span>GitHub</span>
          </a>
          {resume && (
            <a href={resume} target="_blank" rel="noreferrer" className="btn btn--ghost">
              <span>Resume</span>
            </a>
          )}
        </div>
      </div>

      <footer className="footer">
        <span>{agent.callsign} © {new Date().getFullYear()}</span>
        <span>Fan-styled portfolio. Not affiliated with Riot Games.</span>
      </footer>
    </section>
  )
}

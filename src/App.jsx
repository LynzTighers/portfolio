import { useState } from 'react'
import MatchFound from './components/MatchFound.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Dossier from './components/Dossier.jsx'
import Arsenal from './components/Arsenal.jsx'
import MatchHistory from './components/MatchHistory.jsx'
import Contact from './components/Contact.jsx'

function introSeen() {
  try {
    return sessionStorage.getItem('intro-seen') === '1'
  } catch {
    return false
  }
}

export default function App() {
  const [showIntro, setShowIntro] = useState(() => !introSeen())

  function closeIntro() {
    try {
      sessionStorage.setItem('intro-seen', '1')
    } catch {
      // storage blocked: the intro just plays again next visit
    }
    setShowIntro(false)
  }

  return (
    <>
      {showIntro && <MatchFound onDone={closeIntro} />}
      <Nav />
      <main>
        <Hero />
        <Dossier />
        <Arsenal />
        <MatchHistory />
        <Contact />
      </main>
    </>
  )
}

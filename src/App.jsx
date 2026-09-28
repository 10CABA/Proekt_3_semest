import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import MainContent from './components/MainContent.jsx'
import PlayerBar from './components/PlayerBar.jsx'
import { useParallax } from './hooks/useParallax.js'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useParallax(20)

  return (
    <>
      <div className="space-bg">
        <div className="space-bg__image" />
        <div className="space-bg__overlay" />
      </div>

      <div className="app">
        <Sidebar activeSection={activeSection} onChange={setActiveSection} />
        <MainContent activeSection={activeSection} />
        <PlayerBar />
      </div>
    </>
  )
}
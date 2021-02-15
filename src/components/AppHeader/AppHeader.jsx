import './AppHeader.css'
import React from 'react'

export default function AppHeader({ title }) {
  // {} damit wir uns den Title mit destructuring assignmenet rausholen
  return <header className="AppHeader"> {title} </header>
}

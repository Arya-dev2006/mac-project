import React from 'react'
import Doc from './components/Doc'
import Nav from './components/Nav'
import MacWindow from './components/Windows/MacWindow'
import Github from './components/Github'
import Notes from './components/Notes'
import Resume from './components/Resume'
import Spotify from './components/Spotify.Jsx'


const App = () => {
  return (
    <main>
      <Nav />
      
      <Doc />
       <Github />
       <Notes />
       <Resume />
       <Spotify />
    </main>
  )
}

export default App

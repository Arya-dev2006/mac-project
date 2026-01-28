import React, { useState } from 'react'
import Doc from './components/Doc'
import Nav from './components/Nav'
import Github from './components/Github'
import Notes from './components/Notes'
import Resume from './components/Resume'
import Spotify from './components/Spotify'
import Cli from './components/Cli'
import { ButtonDataContext } from './Context/ChangeThemeContext'
import Button from './components/Button'
import { useContext } from 'react'

const App = () => {

  const {theme} = useContext(ButtonDataContext)

  

const [WindowState, setWindowState] = useState({
  Github:false,
  Notes:false,
  Resume:false,
  Spotify:false,
  Cli:false

})

  return (
    <main style={{backgroundImage:`url(${theme.wallpaper})`}}>
      <Nav />
      {WindowState.Github &&  <Github setWindowState={setWindowState} WindowName={'Github'} />}
      {WindowState.Notes &&  <Notes setWindowState={setWindowState} WindowName={'Notes'}/>}
      {WindowState.Resume &&  <Resume setWindowState={setWindowState} WindowName={'Resume'}/>}
      {WindowState.Spotify &&  <Spotify setWindowState={setWindowState} WindowName={'Spotify'} />}
      {WindowState.Cli&&  <Cli setWindowState={setWindowState} WindowName={'Cli'} />}
      <Button content= {'Change Theme'} />
      <Doc setWindowState={setWindowState}/>
    </main>
  )
}

export default App

import React, { useEffect, useState } from 'react'
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
import Menu from './components/Menu'

const App = () => {

  const {theme} = useContext(ButtonDataContext)
  const {Display,setDisplay}= useContext(ButtonDataContext)

  function OpenMenu(e){
    e.preventDefault()
   setDisplay((prev) => ({
  ...prev,
  visible: true,
  x: e.clientX,
  y: e.clientY,
  }))
  }

  function CloseMenu(){
    setDisplay({...Display,visible:false})
  }

const refreshDesktop = () => {
  setRefreshKey((prev) => prev + 1)
}

const [refreshKey, setRefreshKey] = useState(0)

const [WindowState, setWindowState] = useState({
  Github:false,
  Notes:false,
  Resume:false,
  Spotify:false,
  Cli:false

})
const [ActiveWindow, setActiveWindow] = useState(null)
  return (
    <main  key={refreshKey} className={ refreshKey > 0 ? 'refresh' : ''} style={{backgroundImage:`url(${theme.wallpaper})`}}
    onContextMenu={(e)=>{
      OpenMenu(e);
    }}
    onClick={()=>{
      CloseMenu()
    }}
   
    >
      <Nav />
      {WindowState.Github &&  <Github setWindowState={setWindowState} WindowName={'Github'} ActiveWindow={ActiveWindow} setActiveWindow={setActiveWindow} />}
      {WindowState.Notes &&  <Notes setWindowState={setWindowState} WindowName={'Notes'}ActiveWindow={ActiveWindow} setActiveWindow={setActiveWindow}/>}
      {WindowState.Resume &&  <Resume setWindowState={setWindowState} WindowName={'Resume'}ActiveWindow={ActiveWindow} setActiveWindow={setActiveWindow}/>}
      {WindowState.Spotify &&  <Spotify setWindowState={setWindowState} WindowName={'Spotify'}ActiveWindow={ActiveWindow} setActiveWindow={setActiveWindow} />}
      {WindowState.Cli&&  <Cli setWindowState={setWindowState} WindowName={'Cli'} ActiveWindow={ActiveWindow} setActiveWindow={setActiveWindow}/>}
      <Button content= {'Change Theme'} />
      <Doc setWindowState={setWindowState} setActiveWindow={setActiveWindow}/>
      <Menu setWindowState={setWindowState} refreshDesktop={refreshDesktop} />
    </main>
  )
}

export default App

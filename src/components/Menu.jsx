import React, { useContext } from 'react'
import { ButtonDataContext } from '../Context/ChangeThemeContext'
import './Menu.scss'

const Menu = () => {
    const {Display,setDisplay}= useContext(ButtonDataContext)
    console.log(Display);
    
    if(!Display.visible) return null
    
  return (
   <div className="Menu" style={{ top:Display.y, left:Display.x }}>
     <div className="menu-item">Change Theme</div>
      <div className="menu-item">System Preferences</div>
      <div className="divider" />
      <div className="menu-item">New Note</div>
      <div className="menu-item">Open Terminal</div>
      <div className="divider" />
      <div className="menu-item">Refresh</div>
      <div className="menu-item">About This Mac</div>
   </div>
  )
}

export default Menu

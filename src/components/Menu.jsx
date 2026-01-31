import React, { useContext } from 'react'
import { ButtonDataContext } from '../Context/ChangeThemeContext'
import './Menu.scss'

const Menu = ({setWindowState , refreshDesktop}) => {
    const {NextTheme,Display,setDisplay}= useContext(ButtonDataContext)
    console.log(Display);
    
    if(!Display.visible) return null
    
  return (
   <div className="Menu" style={{ top:Display.y, left:Display.x }}onClick={(e) => e.stopPropagation()}>
     <div className="menu-item" onClick={()=>{
        NextTheme();
        setDisplay((prev)=>({
            ...prev,
            visible:false,
        }))
     }}>Change Theme</div>

      <div className="divider" />
      <div className="menu-item" onClick={()=>{
        setWindowState((prev)=>({
            ...prev,
             Notes:true,
        }))
         setDisplay((prev)=>({
            ...prev,
            visible:false,
        }))
     }}>New Note</div>
      <div className="menu-item" onClick={()=>{
        setWindowState((prev)=>({
            ...prev,
             Cli:true,
        }))
         setDisplay((prev)=>({
            ...prev,
            visible:false,
        }))
     }}>Open Terminal</div>
      <div className="divider" />
      <div className="menu-item"  onClick={() => {
    refreshDesktop()
    setDisplay((prev) => ({ ...prev, visible: false }))
  }}
  >Refresh</div>
      <div className="menu-item">About This Mac</div>
   </div>
  )
}

export default Menu

import React from 'react'
import './Nav.scss'
import DateTime from './DateTime'

const Nav = () => {
  return (
    <nav>
        <div className="left">
            <div className="icon"><img src="./Nav-icons/apple.svg" alt="" /></div>
            <div className="nav-items">
                <p>Arya Chakraborty</p>
            </div>
            <div className="nav-items">
                <p>File</p>
            </div>
            <div className="nav-items">
                <p>Window</p>
            </div>
            <div className="nav-items">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
             <div className="icon"><img src="./Nav-icons/wifi.svg" alt="" /></div>
             <div className="datetime"><DateTime /></div>
             
        </div>
    </nav>
  )
}

export default Nav

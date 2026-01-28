import React from 'react'
import './Button.scss'
import { useContext } from 'react'
import { ButtonDataContext } from '../Context/ChangeThemeContext'


const Button = ({content}) => {
    const {theme,NextTheme}=useContext(ButtonDataContext)
  return (
    <div className="btn">
        <button onClick={()=>{
            NextTheme()
        }}>{content}</button>
    </div>
  )
}

export default Button

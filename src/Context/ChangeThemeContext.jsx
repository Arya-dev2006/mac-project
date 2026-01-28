import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const ButtonDataContext = createContext()
 
const ChangeThemeContext = (props) => {

    const themes = [
  {
    name: 'Mikasa',
    wallpaper: '/Themes/Mikasa.png',
    accent: '#0a84ff',
  },
  {
    name: 'Yorichi',
    wallpaper: '/Themes/Yorichi.jpg',
    accent: '#007aff',
  },
  {
    name: 'Panda',
    wallpaper: '/Themes/Panda.png',
    accent: '#bf5af2',
  },
  {
    name: 'Batman',
    wallpaper: '/Themes/Batman.png',
    accent: '#30d158',
  },
]


const [ChangeTheme, setChangeTheme] = useState(0)
function NextTheme(){
    setChangeTheme((prev)=>{
        if(prev===themes.length-1){
            return 0
        }else{
            return prev + 1
        }
    })
}


  return (
    
    <ButtonDataContext.Provider value={{
        theme:themes[ChangeTheme], //passing the current Theme object
        NextTheme,//passing the NextTheme() function here.

    }}>
        {props.children}
    </ButtonDataContext.Provider>
  )
}

export default ChangeThemeContext

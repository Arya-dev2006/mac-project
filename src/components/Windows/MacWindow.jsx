import React from 'react'
import { Rnd } from 'react-rnd'
import './MacWindow.scss'
import DateTime from '../DateTime'
import Github from '../Github'

const MacWindow = ({children,width='80vh', height='50vh',left=300,bottom=50,setWindowState,WindowName,ActiveWindow,setActiveWindow}) => {
    console.log(WindowName)
    const isActive = ActiveWindow === WindowName

  return (
    <Rnd  default={{
       height:height,
       width:width,
       x:left,
       y:bottom,

    }
    }
    style={{
    zIndex: isActive ? 100 : 10,
  }}
  onMouseDown={() => setActiveWindow(WindowName)}

    >
        <div className={`terminal ${isActive ? 'active' : ''}`} >
        <div className="nav">
            <div className="controls">
                <div className="red" onClick={()=>{
                    setWindowState((prev)=>{
                        return {
                            ...prev,
                            [WindowName]:false,
                        };
                    })
                }}></div>
                <div className="yellow"></div>
                <div className="green"></div>
                <div className="title">
                    <p>Arya Chakraborty </p>
                    <DateTime/>
                    
                </div>
                
            </div>
        </div>
        <div className="content">
           {children}
        </div>
        </div>
    </Rnd>
  )
}

export default MacWindow

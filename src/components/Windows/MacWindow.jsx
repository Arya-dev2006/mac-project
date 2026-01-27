import React from 'react'
import { Rnd } from 'react-rnd'
import './MacWindow.scss'
import DateTime from '../DateTime'

const MacWindow = ({children,width='80vh', height='50vh',left=300,bottom=50}) => {
  return (
    <Rnd  default={{
       height:height,
       width:width,
       x:left,
       y:bottom,

    }
     
    }>
        <div className="terminal">
        <div className="nav">
            <div className="controls">
                <div className="red"></div>
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

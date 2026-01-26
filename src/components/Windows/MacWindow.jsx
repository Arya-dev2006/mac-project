import React from 'react'
import { Rnd } from 'react-rnd'
import './MacWindow.scss'
import DateTime from '../DateTime'

const MacWindow = (props) => {
  return (
    <Rnd  default={{
       height:"80vh",
       width:"50vw",
       x:300,
       y:50,

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
           {props.children}
        </div>
        </div>
    </Rnd>
  )
}

export default MacWindow

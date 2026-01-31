import React from 'react'
import MacWindow from './Windows/MacWindow'
import './Resume.scss'

const Resume = ({setWindowState,WindowName,ActiveWindow,setActiveWindow}) => {
  return (
    
    <MacWindow setWindowState={setWindowState} WindowName={WindowName} ActiveWindow={ActiveWindow} setActiveWindow={setActiveWindow} >
        <div className="resume-window">
            <iframe src="resume.pdf" frameborder="0"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume

import React from 'react'
import './Doc.scss'
import Github from './Github'

const Doc = ({setWindowState}) => {
  return (
    <footer>
        <div className="Dock">
            <div className="Elements" id='calender' onClick={()=>{
              window.open("https://calendar.google.com/calendar/u/0/r?pli=1","_blank")
            }}><img src="./Doc-Icons/calender.svg" alt="" /></div>
            <div className="Elements" id='github' onClick={()=>{
              setWindowState((prev)=>{
                return {
                  ...prev,
                  Github:true,
                };
              })
            }}><img src="./Doc-Icons/github.svg" alt="" /></div>
            <div className="Elements" id='link' onClick={()=>{
              window.open('https://www.linkedin.com/in/arya-chakraborty-08b208333/','_Blank')
            }}><img src="./Doc-Icons/link.svg" alt="" /></div>
            <div className="Elements" id='mail' onClick={()=>{
              window.open("mailto:arya021chakraborty@gmail.com",'_Blank')
            }}><img src="./Doc-Icons/mail.svg" alt="" /></div>
            <div className="Elements" id='note' onClick={()=>{
              setWindowState((prev)=>{
                return {
                  ...prev,
                  Notes:true,
                };
              })
            }} ><img src="./Doc-Icons/note.svg" alt="" /></div>
            <div className="Elements" id='pdf' onClick={()=>{
              setWindowState((prev)=>{
                return {
                  ...prev,
                  Resume:true,
                };
              })
            }} ><img src="./Doc-Icons/pdf.svg" alt="" /></div>
            <div className="Elements" id='cli' onClick={()=>{
              setWindowState((prev)=>{
                return {
                  ...prev,
                  Cli:true,
                };
              })
            }} ><img src="./Doc-Icons/cli.svg" alt="" /></div>
            <div className="Elements" id='spotify' onClick={()=>{
              setWindowState((prev)=>{
                return {
                  ...prev,
                  Spotify:true,
                };
              })
            }} ><img src="./Doc-Icons/spotify.svg" alt="" /></div>
        </div>
    </footer>
  )
}

export default Doc

import React from 'react'
import './Doc.scss'

const Doc = () => {
  return (
    <footer>
        <div className="Dock">
            <div className="Elements" id='calender'><img src="./Doc-Icons/calender.svg" alt="" /></div>
            <div className="Elements" id='github'><img src="./Doc-Icons/github.svg" alt="" /></div>
            <div className="Elements" id='link'><img src="./Doc-Icons/link.svg" alt="" /></div>
            <div className="Elements" id='mail'><img src="./Doc-Icons/mail.svg" alt="" /></div>
            <div className="Elements" id='note'><img src="./Doc-Icons/note.svg" alt="" /></div>
            <div className="Elements" id='pdf'><img src="./Doc-Icons/pdf.svg" alt="" /></div>
            <div className="Elements" id='cli'><img src="./Doc-Icons/cli.svg" alt="" /></div>
            <div className="Elements" id='spotify'><img src="./Doc-Icons/spotify.svg" alt="" /></div>
        </div>
    </footer>
  )
}

export default Doc

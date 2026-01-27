import React, { useEffect, useState } from 'react'
import Macwidows from './Windows/MacWindow'
import axios from 'axios'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './Notes.scss'

const Notes = () => {
    const [markdown, setmarkdown] = useState('')
    
    async function GetData(){
     const res =  await axios.get('./Notes/notes.txt')
        setmarkdown(res.data)
        
}

   useEffect(()=>{
       GetData();
    },[])

  return (
    <Macwidows>
        <div className="note-window">
          <SyntaxHighlighter language="typescript" style={atomOneDark}>
              {markdown}
    </SyntaxHighlighter>
        </div>
    </Macwidows>
  )
}

export default Notes

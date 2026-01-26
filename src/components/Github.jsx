import React from 'react'
import github from '../assets/github.json'
import {Rnd} from 'react-rnd'
import MacWindow from './Windows/MacWindow'
import './Github.scss'

const Github = () => {
    
  return (
    <MacWindow>
    <div className="cards">
            {github.map((elem)=>{
                return <div className="card">
                    <img src={elem.image} alt="" />
                    <h1>{elem.name}</h1>
                    <p>{elem.description}</p>
                    <div className="tags">
                    {elem.techStack.map((stk)=>{
                      return  <div className="tag">{stk}</div>
                    })}
                    </div>
                    <div className="links">
                    <div className="lbtn">
                       <a href={elem.repo}>reposetry</a>
                    </div>
                    <div className="rbtn">
                        <a href={elem.liveDemo}>LiveDemo</a>
                    </div>
                    </div>
                </div>
            })}
        </div>
        </MacWindow>
  )
}

export default Github

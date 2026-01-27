import React from 'react'
import MacWindow from './Windows/MacWindow'
import './Spotify.scss'

const Spotify = () => {
  return (
    <MacWindow width='80vh' height='45vh' left='940' bottom='45'>
        <div className="spotify-window">
        <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdFesNN9TzXT?utm_source=generator&theme=0"
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen 
        loading="lazy"
      />
      </div>
    </MacWindow>
  )
}

export default Spotify

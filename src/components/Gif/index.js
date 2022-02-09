import React from "react";
import './gif.css'

export default function Gif({title, id, url}) {
  return (
    <div className="Gif">
      <a href={url} target="_blank" rel="noreferrer" className='Gif-link'>
        <h4>{title}</h4>
        <small>{id}</small>
        <img key={'img-' + id} src={ url } alt={title}></img>
      </a>
    </div>
  )
}
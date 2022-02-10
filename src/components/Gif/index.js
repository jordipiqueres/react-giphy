import React from "react";
import { Link } from "wouter";
import './gif.css'

export default function Gif({title, id, url}) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
        <small>{id}</small>
        <img loading='lazy' key={'img-' + id} src={ url } alt={title}></img>
      </Link>
    </div>
  )
}
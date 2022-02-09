import React, { useEffect, useState } from "react";
import getGifs from "../../services/getGifs";
import Gif from "../Gif";
import './styles.css'

export default function LisOfGifs ({gifs}) {

  return (<div className='ListOfGifs'>
    {
      gifs.map((singleGif, index) => {
      const {id, title, url} = singleGif
      return (
      <Gif 
        key={id} 
        title={title} 
        url={url} 
        id={id}>
      </Gif>
      )
    })
  }
  </div>)
}
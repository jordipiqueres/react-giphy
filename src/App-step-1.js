import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const GIFS = [
  'https://media4.giphy.com/media/EatwJZRUIv41G/giphy.webp?cid=ecf05e47be93dhvfe8c7u9ia5l8m1q633z3xm4mbroj3dfp3&rid=giphy.webp&ct=g',
  'https://media1.giphy.com/media/EPcvhM28ER9XW/200w.webp?cid=ecf05e47be93dhvfe8c7u9ia5l8m1q633z3xm4mbroj3dfp3&rid=200w.webp&ct=g'
]

const NEW_GIFS = [
  'https://media1.giphy.com/media/jxODdkVOIGFgc/giphy.webp?cid=ecf05e47be93dhvfe8c7u9ia5l8m1q633z3xm4mbroj3dfp3&rid=giphy.webp&ct=g',
  'https://media4.giphy.com/media/46bOASEEnV5y8/giphy.webp?cid=ecf05e47be93dhvfe8c7u9ia5l8m1q633z3xm4mbroj3dfp3&rid=giphy.webp&ct=g'
]

const DIFFERENT_GIFS = [
  'https://media4.giphy.com/media/xNuoUMEJCdVKVm7r2x/200w.webp?cid=ecf05e47be93dhvfe8c7u9ia5l8m1q633z3xm4mbroj3dfp3&rid=200w.webp&ct=g',
  'https://media2.giphy.com/media/TObbUke0z8Mo/200.webp?cid=ecf05e47be93dhvfe8c7u9ia5l8m1q633z3xm4mbroj3dfp3&rid=200.webp&ct=g'
]

function App() {
  const [gifs , setGifs] = useState(GIFS)

  useEffect(() => {
    console.log('efecto ejecutado')
    setGifs(NEW_GIFS)
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map((singleGif, index) => {
            return (<img key={'img-' + index} src={singleGif} alt=''></img>)
          })
        }
        <button onClick={() => setGifs(DIFFERENT_GIFS)}>cambiar gifs</button>
      </section>
    </div>
  );
}

export default App;

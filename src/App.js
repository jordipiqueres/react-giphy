import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import getGifs from './services/getGifs';
import LisOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';
import Detail from './components/Detail';
import Home from './pages/Home'

function App() {
  const [keyword, setKeyword] = useState('panda')
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <button onClick={() => {
            setKeyword('mapache')
            console.log('clicked')
          }
        }>cambiar gifs</button>
        <Link className="link" to='/search/panda'>gif de pandas</Link>
        <Link className="link" to='/search/mapache'>gif de mapaches</Link>
        <Link className="link" to='/search/barcelona'>gif de barcelona</Link>

        <Route
          component={Home}
          path="/"
        ></Route>

        <Route
          component={LisOfGifs}
          path="/search/:keyword"
        ></Route>
     
     
        <Route
          component={Detail}
          path="/gif/:id"
        ></Route>
        
      </section>
    </div>
  );
}

export default App;

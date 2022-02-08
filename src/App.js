import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import getGifs from './services/getGifs';
import LisOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';


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
        <Link className="link" to='/gif/panda'>gif de pandas</Link>
        <Link className="link" to='/gif/mapache'>gif de mapaches</Link>
        <Link className="link" to='/gif/barcelona'>gif de barcelona</Link>

        <Route
          component={LisOfGifs}
          path="/gif/:keyword"
        ></Route>
     
        
        
      </section>
    </div>
  );
}

export default App;

import './App.css';
import { useEffect, useState } from 'react';
import { Link, Route } from 'wouter';
import Detail from './components/Detail';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className='App-logo' alt='Giffy logo' src='/logo.png'></img>
        </Link>
        <Route
          component={Home}
          path="/"
        ></Route>

        <Route
          component={SearchResults}
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

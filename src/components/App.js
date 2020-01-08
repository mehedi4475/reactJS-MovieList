import React from 'react';
import './App.css';
import First from './First/First';
import Second from './Second/Second';
import Third from './Third/Third';
import Counter from './Counter/Counter';
import MovieList from './MovieList/MovieList';
import Nav from './Nav/Nav';
import { MovieProvider } from './Context/MovieContext';
import AddMovie from './AddMovie/AddMovie';

function App() {

  return (
    <MovieProvider>
      <div className="App">         
          <Nav />
          <AddMovie/>
          <MovieList/>
      </div>
    </MovieProvider>
  );
}

export default App;

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
import About from './About/About';
import Contact from './Contact/Contact';
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <MovieProvider>
      <Router>
        <div className="App">         
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/movie-list" component={MovieList} />
              <Route path="/add-movie" component={AddMovie} />> 
            </Switch>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;

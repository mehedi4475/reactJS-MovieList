import React, { useContext } from 'react';
import './Nav.css'
import { MovieContext } from '../Context/MovieContext';
import {Link} from 'react-router-dom';

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/movie-list">Movie List</Link></li>
                    <li><Link to="/add-movie">Add Movie</Link></li>
                </ul>
                <h3>Mehedi Hasan</h3>
                <h4>My movie list: { movies.length }</h4>
            </nav>
        </div>
    )
}

export default Nav;
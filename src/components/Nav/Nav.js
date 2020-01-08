import React, { useContext } from 'react';
import './Nav.css'
import { MovieContext } from '../Context/MovieContext';

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return(
        <div>
            <nav>
                <h3>Mehedi Hasan</h3>
                <h4>My movie list: { movies.length }</h4>
            </nav>
        </div>
    )
}

export default Nav;
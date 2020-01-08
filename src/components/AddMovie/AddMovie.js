import React, { useState, useContext } from 'react';
import MovieList from '../MovieList/MovieList';
import { MovieContext } from '../Context/MovieContext';

const AddMovie = () =>{

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = e =>{
        setName(e.target.value);
    }

    const updatePrice = e =>{
        setPrice(e.target.value);
    }

    const AddMovie = e =>{
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, { name: name, price: price, id: prevMovies.length+1  }]);

    }


    return(
        <div>
            <form onSubmit={AddMovie}>
                <input type="text" name="name" value={name} onChange={updateName} />
                <input type="text" name="price" value={price} onChange={updatePrice} />
                <button>Submit</button>
            </form>
            <MovieList/>
        </div>

     
    )
}

export default AddMovie;
import React, { useState, createContext } from 'react';

export const MovieContext = createContext();


export const MovieProvider = props => {
    const[movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: 10,
            id: 1
        },
        {
            name: '3Idits',
            price: 12,
            id: 2
        },
        {
            name: 'Tery Sang',
            price: 8,
            id: 3
        },
        {
            name: "Prayer Impossible",
            price: 20,
            id: 4
        }
    ]);


    return(
        <MovieContext.Provider value = {[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}
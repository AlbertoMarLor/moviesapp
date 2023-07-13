import React, { useEffect, useState } from 'react'
import { Edit } from './Edit';

export const List = ({ listState, setListState }) => {

    const [edit, setEdit] = useState(0)

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem("movie"));
        setListState(movies);
        return movies;
    }

    const deleteMovie = (id) => {

        let saved_movies = getMovies();

        let new_movies_array = saved_movies.filter(movie => movie.id !== parseInt(id));

        setListState(new_movies_array)

        localStorage.setItem('movie', JSON.stringify(new_movies_array));

    }

    return (
        <>
            {listState != null ?
                listState.map(movie => {
                    return (
                        <article key={movie.id} className="movie-item">
                            <h3 className="title">{movie.title}</h3>
                            <img src={movie.image} className='image' />
                            <p className="description">{movie.description}</p>

                            <button onClick={() => setEdit(movie.id)} className="edit">Edit</button>
                            <button onClick={() => deleteMovie(movie.id)} className="delete">Delete</button>

                            {edit === movie.id && (
                                <Edit movie={movie}
                                    getMovies={getMovies}
                                    setEdit={setEdit}
                                    setListState={setListState} />
                            )}

                        </article>
                    )
                })
                : <h2>There is no movies to show!</h2>
            }




        </>
    )
}

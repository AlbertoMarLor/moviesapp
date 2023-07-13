import React, { useState } from 'react'

export const Search = ({ listState, setListState }) => {

    const [find, setFind] = useState('');
    const [notFound, setNotFound] = useState(false);

    const searchMovie = e => {
        setFind(e.target.value)
        let findedMovies = listState.filter(movie => {
            return movie.title.toLowerCase().includes(find.toLocaleLowerCase());
        })
        if (find.length <= 1 || findedMovies <= 0) {
            findedMovies = JSON.parse(localStorage.getItem('movie'));
            setNotFound(true);
        } else {
            setNotFound(false);
        }



        setListState(findedMovies);
    }

    return (
        <div className="search">
            <h3 className="title" >Search: {find}</h3>

            {(notFound && find.length > 1) && (
                <span className='not-found'>Title doesn't exist</span>
            )}
            <form >
                <input type="text"
                    id='search_field'
                    name='find'
                    autoComplete='off'
                    value={find}
                    onChange={searchMovie} />
            </form>
        </div>
    )
}

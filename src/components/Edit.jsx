import React from 'react'

export const Edit = ({ movie, getMovies, setEdit, setListState }) => {
    const title_component = "Edit movie";
    const saveEdit = (e, id) => {
        e.preventDefault();
        let target = e.target;
        const storagedMovies = getMovies();
        const index = storagedMovies.findIndex(movie => movie.id === id);
        let updatedMovie = {
            id,
            title: target.title.value,
            description: target.description.value,
            image: target.image.value
        }
        storagedMovies[index] = updatedMovie;
        localStorage.setItem('movie', JSON.stringify(storagedMovies));

        setListState(storagedMovies);
        setEdit(0);

    }

    return (
        <div className='edit_form' >
            <h3 className='title' >{title_component}</h3>
            <form className='edit_form' onSubmit={e => saveEdit(e, movie.id)}>
                <input name='title' type="text" className='edited_title' defaultValue={movie.title} />
                <input name='image' type="text" className='edited_image' defaultValue={movie.image} />
                <textarea name="description" defaultValue={movie.description} className='edited_description' />
                <input type="submit" className='edit' value="Update" />

            </form>
        </div>
    )
}

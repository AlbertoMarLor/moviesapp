import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage';

export const Create = ({ setListState }) => {

    const componentTitle = 'Add movie';
    const [movieState, setmovieState] = useState({
        title: '',
        description: '',
        image: ''
    })

    const { title, description } = movieState


    const getDataForm = e => {
        e.preventDefault();

        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;
        let image = target.image.value

        let movie = {
            id: new Date().getTime(), //tiempo en unix
            title,
            description,
            image
        }

        setmovieState(movie);

        setListState(items => {
            return [...items, movie];
        })

        SaveInStorage("movie", movie);



    }



    return (
        <div className="add">
            <h3 className="title" >{componentTitle}</h3>
            <strong>
                {(title && description) && "You added this movie:" + title}
            </strong>
            <form onSubmit={getDataForm} >
                <input
                    type="text"
                    placeholder="Title"
                    id='title'
                    name='title' />
                <input
                    type="text"
                    placeholder="Image"
                    id='image'
                    name='image' />

                <textarea
                    placeholder="Description"
                    id='description'
                    name='description'></textarea>

                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

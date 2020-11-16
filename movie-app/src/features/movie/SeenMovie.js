import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../../sass/_watchlist.scss';
import { ItemTypes } from './Constants';
import { useDrop } from 'react-dnd';
import {seenMovieAdded} from './SeenMovieSlice';

const SeenMovie = () => {
    const seenList = useSelector(state => state.seenMovie);
    const [movieTitle, setMovieTitle] = useState('');
    const dispatch = useDispatch();
    
    const onMovieTitleChange = (e) => {
        setMovieTitle(e.target.value);
    }

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.MOVIE,
        drop: (e) => {
            const movieInfo = e.movieInfo;
            dispatch(seenMovieAdded(movieInfo.title, movieInfo.id))
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            item: monitor.getItem()
        })
    })

    useEffect(() => {
        console.log(movieTitle)
    }, [movieTitle])

    return (
        <div className='seenListDiv'>
            <div className='seenListContent' ref={drop}>
            <h1>Seen Movies</h1>
            <p className='description'>Movies you have already viewed</p>
            {seenList.map((movie, index) => {
                return (
                    <p key={index}>{index + 1}. {movie.title}</p>
                )
            })}
            </div>
        </div>
    );
}
 
export default SeenMovie;
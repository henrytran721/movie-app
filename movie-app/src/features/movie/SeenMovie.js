import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../../sass/_watchlist.scss';
import { ItemTypes } from './Constants';
import { useDrop } from 'react-dnd';
import {seenMovieAdded} from './SeenMovieSlice';
import { watchListRemove } from './ToWatchSlice';
import MovieItem from './MovieItem';

const SeenMovie = () => {
    const seenList = useSelector(state => state.seenMovie);
    const [movieTitle, setMovieTitle] = useState('');
    const dispatch = useDispatch();
    
    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.MOVIE,
        drop: (e) => {
            const movieInfo = e.movieInfo;
            dispatch(seenMovieAdded(movieInfo.title, movieInfo.id))
            dispatch(watchListRemove({id: movieInfo.id}));
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
            <div className='seenList'>
            {seenList.map((movie, index) => {
                return (
                    <MovieItem className='movieItem' MovieItem={movie.title} key={index} id={movie.id} MovieInfo={movie} currIndex={index} />
                )
            })}
            </div>
            <div></div>
            </div>
        </div>
    );
}
 
export default SeenMovie;
import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../../sass/_watchlist.scss';
import { watchListAdded } from './ToWatchSlice';
import MovieItem from './MovieItem';

const WatchList = () => {
    const dispatch = useDispatch();
    const toWatchList = useSelector(state => state.toWatch);
    const [movieTitle, setMovieTitle] = useState('');
    
    const onMovieTitleChange = (e) => {
        setMovieTitle(e.target.value);
    }

    const onAddMovieTitle = (e) => {
        e.preventDefault();
        dispatch(watchListAdded(movieTitle));
        setMovieTitle('');
    }


    useEffect(() => {
        console.log(movieTitle)
    }, [movieTitle])

    return (
        <div className='watchListDiv'>
            <div className='watchListContent'>
            <h1>Watch List</h1>
            <p className='description'>Add movies here to be seen in the future</p>
            <div>
                {toWatchList.map((movie, index) => {
                    return (
                        <MovieItem className='movieItem' MovieItem={movie.title} key={index} id={movie.id} MovieInfo={movie} currIndex={index} />
                    )
                })}
            </div>
            <form>
                <input
                    type='text'
                    name='newMovieTitle'
                    id='newMovieTitle'
                    value={movieTitle}
                    onChange={onMovieTitleChange}
                />
                <button onClick={onAddMovieTitle}>Add To Watchlist</button>
            </form>
            </div>
        </div>
    );
}
 
export default WatchList;
import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../../sass/_watchlist.scss';
import { watchListAdded } from './ToWatchSlice';
import MovieItem from './MovieItem';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './Constants';
import {seenMovieRemove} from './SeenMovieSlice';

const WatchList = () => {
    const dispatch = useDispatch();
    const toWatchList = useSelector(state => state.toWatch);
    const [movieTitle, setMovieTitle] = useState('');
    
    const onMovieTitleChange = (e) => {
        setMovieTitle(e.target.value);
    }

    const onAddMovieTitle = (e) => {
        e.preventDefault();
        if(movieTitle !== '') {
            document.querySelector('.error').textContent = '';
            dispatch(watchListAdded(movieTitle));
        } else {
            document.querySelector('.error').textContent = 'Please enter a movie title.';
        }
        setMovieTitle('');
    }

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.MOVIE,
        drop: (e) => {
            const movieInfo = e.movieInfo;
            dispatch(watchListAdded(movieInfo.title));
            dispatch(seenMovieRemove({id: movieInfo.id}));
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
        <div className='watchListDiv'>
            <div className='watchListContent' ref={drop}>
            <h1>Watch List</h1>
            <p className='description'>Add movies here to be seen in the future</p>
            <div className='watchList'>
                {toWatchList.map((movie, index) => {
                    return (
                        <MovieItem className='movieItem' MovieItem={movie.title} key={index} id={movie.id} MovieInfo={movie} currIndex={index} />
                    )
                })}
            </div>
            <p className='error'></p>
            <form>
                <input
                    type='search'
                    name='newMovieTitle'
                    id='newMovieTitle'
                    value={movieTitle}
                    onChange={onMovieTitleChange}
                />
                <button className='addWatchListBtn' onClick={onAddMovieTitle}>Add To Watchlist</button>
            </form>
            </div>
        </div>
    );
}
 
export default WatchList;
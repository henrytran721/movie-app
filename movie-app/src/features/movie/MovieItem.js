import React from 'react';
import {ItemTypes} from './Constants';
import {useDrag} from 'react-dnd';
import {useDispatch} from 'react-redux';
import { watchListRemove } from './ToWatchSlice';

const MovieItem = (props) => {
    const dispatch = useDispatch();
    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.MOVIE, movieInfo: props.MovieInfo},
        collect: monitor => ({
            item: monitor.getItem(),
            isDragging: !!monitor.isDragging()
        }),
        end: (item) => {
            const movieInfo = item.movieInfo;
            dispatch(watchListRemove({id: movieInfo.id}));
        }
    })
    return (
        <p 
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'pointer',
            }}
        >
        {props.currIndex + 1}.
        {props.MovieItem}
        </p>
    );
}
 
export default MovieItem;
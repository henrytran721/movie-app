import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = [
    {id: 1, title: 'Mad Max: Fury Road'}
];

const ToWatchSlice = createSlice({
    name: 'To Watch List',
    initialState,
    reducers: {
        watchListAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                    },
                }
            }
        },
        watchListRemove(state, action) {
            const { id } = action.payload;
            return state.filter(movie => movie.id !== id);
        }
    },
});

export const {watchListAdded, watchListRemove} = ToWatchSlice.actions;

export default ToWatchSlice.reducer;
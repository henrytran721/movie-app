import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = [
    {id: 1, title: 'Joker'}
];

const SeenMovieSlice = createSlice({
    name: 'Seen Movie',
    initialState,
    reducers: {
        seenMovieAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, id) {
                return {
                    payload: {
                        id,
                        title
                    }
                }
            }
        } 
    },
});

export const {seenMovieAdded} = SeenMovieSlice.actions;

export default SeenMovieSlice.reducer;
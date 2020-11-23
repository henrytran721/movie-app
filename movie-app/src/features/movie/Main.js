import React from 'react';
import WatchList from './WatchList';
import SeenMovie from './SeenMovie';
import SearchMovies from './SearchMovies';
import '../../sass/_main.scss';
import {HTML5Backend} from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import axios from 'axios';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // axios.get('http://localhost:5000/testAPI')
        //     .then((res) => {
        //         console.log(res.data);
        //     })
        
        const query = 'Star Wars';
        
        async function searchMovies() {
            const query = 'Star Wars';
            const url = `https://api.themoviedb.org/3/search/movie?api_key=8d84b67511e9f27a9d740a4878a97742&language=en-US&query=${query}&page=1&include_adult=true`;
            try {
                const res = await fetch(url);
                const data = await res.json();
                console.log(data);
            } catch(e) {
                console.log(e);
            }
        }

        searchMovies();
    }

    render() { 
        return (
            <DndProvider backend={HTML5Backend}>
            <div className='mainDiv'>
                <SearchMovies />
               <WatchList /> 
               <SeenMovie />
            </div>
            </DndProvider>
        );
    }
}
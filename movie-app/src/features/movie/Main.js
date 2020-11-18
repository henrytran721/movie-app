import React from 'react';
import WatchList from './WatchList';
import SeenMovie from './SeenMovie';
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
        axios.get('http://localhost:5000/testAPI')
            .then((res) => {
                console.log(res.data);
            })
    }

    render() { 
        return (
            <DndProvider backend={HTML5Backend}>
            <div className='mainDiv'>
               <WatchList /> 
               <SeenMovie />
            </div>
            </DndProvider>
        );
    }
}
import React, { useEffect, useState } from 'react';
import '../../sass/_searchResult.scss';
const SearchMovies = () => {
    const [searchMovie, setSearchMovie] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchMovChange = function(e) {
        setSearchMovie(e.target.value);
    }
    
    useEffect(() => {
        const query = searchMovie;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=8d84b67511e9f27a9d740a4878a97742&language=en-US&query=${query}&page=1&include_adult=true`;
        async function searchMovies() {
            const query = searchMovie;
            const url = `https://api.themoviedb.org/3/search/movie?api_key=8d84b67511e9f27a9d740a4878a97742&language=en-US&query=${query}&page=1&include_adult=true`;
            try {
                const res = await fetch(url);
                const data = await res.json();
                setSearchResults(data.results);
            } catch(e) {
                console.log(e);
            }
        }
        searchMovies();
    }, [searchMovie, searchResults]) 

    return (
        <div>
            <h2 className='searchMovHeader'>Search For Movies</h2>
            <form>
                <input
                    type='search'
                    id='searchMovie'
                    name='searchMovie'
                    value={searchMovie}
                    onChange={handleSearchMovChange}
                />
            </form>
            <div className='searchResultsDiv'>
                {searchResults !== undefined ?
                searchResults.slice(0,8).map((movie) => {
                    return (
                        <div className='searchResult'>
                            <div className='searchResultHeader'>
                                <h3>{movie.title}</h3>
                                <p>{movie.release_date !== undefined ? movie.release_date.split('-')[0] : ''}</p>
                            </div>
                            {movie.backdrop_path ? <img className='movieImg' src={`https://image.tmdb.org/t/p/original` + movie.backdrop_path} /> : ''}
                            <p>{movie.overview}</p>
                        </div>
                    )
                }) : ''}
            </div>
        </div>
    )
}

export default SearchMovies;
// src/pages/Movies.jsx
import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { getPopularMovies } from '../services/api';
import './Movies.css';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            const data = await getPopularMovies();
            setMovies(data.results || []);
            setLoading(false);
        };
        fetchMovies();
    }, []);

    return (
        <div className="movies-page">
            <div className="page-header">
                <h1>All Movies</h1>
                <p>Browse our collection of popular movies</p>
            </div>
            <MovieList movies={movies} loading={loading} />
        </div>
    );
}

export default Movies;
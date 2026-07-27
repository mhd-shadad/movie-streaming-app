// src/components/MovieList.jsx
import React from 'react';
import MovieCard from './MovieCard';
import LoadingSpinner from './LoadingSpinner';
import './MovieList.css';

function MovieList({ movies, loading, title }) {
    if (loading) {
        return <LoadingSpinner />;
    }

    if (!movies || movies.length === 0) {
        return (
            <div className="movie-list-empty">
                <i className="fas fa-film"></i>
                <p>No movies found.</p>
            </div>
        );
    }

    return (
        <div className="movie-list-section">
            {title && <h2 className="movie-list-title">{title}</h2>}
            <div className="movie-list-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default MovieList;
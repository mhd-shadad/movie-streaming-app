// src/components/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
    const { id, title, poster_path, vote_average, release_date } = movie;

    const posterUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : 'https://via.placeholder.com/500x750/1a1a1a/666?text=No+Image';

    const year = release_date ? new Date(release_date).getFullYear() : '';

    return (
        <Link to={`/movie/${id}`} className="movie-card">
            <div className="movie-card-poster">
                <img src={posterUrl} alt={title} loading="lazy" />
                <div className="movie-card-overlay">
                    <i className="fas fa-play-circle"></i>
                    <span>View Details</span>
                </div>
            </div>
            <div className="movie-card-info">
                <h3 className="movie-card-title">{title}</h3>
                <div className="movie-card-meta">
                    <span className="movie-card-rating">
                        <i className="fas fa-star"></i>
                        {vote_average ? vote_average.toFixed(1) : '—'}
                    </span>
                    <span className="movie-card-year">{year}</span>
                </div>
            </div>
        </Link>
    );
}

export default MovieCard;
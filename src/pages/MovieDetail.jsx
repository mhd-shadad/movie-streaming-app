// src/pages/MovieDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import './MovieDetail.css';

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            const data = await getMovieDetails(id);
            setMovie(data);
            setLoading(false);
        };
        fetchMovie();
    }, [id]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!movie) {
        return (
            <div className="movie-detail-error">
                <i className="fas fa-exclamation-triangle"></i>
                <p>Movie not found</p>
                <Link to="/" className="back-link">
                    Go back home
                </Link>
            </div>
        );
    }

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/500x750/1a1a1a/666?text=No+Image';

    const backdropUrl = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : null;

    const genres = movie.genres || [];
    const year = movie.release_date
        ? new Date(movie.release_date).getFullYear()
        : '';

    const runtime = movie.runtime
        ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
        : '';

    return (
        <div className="movie-detail-page">
            {backdropUrl && (
                <div
                    className="movie-detail-backdrop"
                    style={{ backgroundImage: `url(${backdropUrl})` }}
                >
                    <div className="backdrop-overlay"></div>
                </div>
            )}

            <div className="movie-detail-container">
                <div className="movie-detail-poster">
                    <img src={posterUrl} alt={movie.title} />
                </div>

                <div className="movie-detail-info">
                    <h1 className="movie-detail-title">
                        {movie.title}
                        {year && <span className="movie-detail-year">({year})</span>}
                    </h1>

                    {movie.tagline && (
                        <p className="movie-detail-tagline">"{movie.tagline}"</p>
                    )}

                    <div className="movie-detail-meta">
                        {movie.vote_average > 0 && (
                            <span className="detail-rating">
                                <i className="fas fa-star"></i>
                                {movie.vote_average.toFixed(1)} / 10
                            </span>
                        )}
                        {runtime && (
                            <span className="detail-runtime">
                                <i className="fas fa-clock"></i>
                                {runtime}
                            </span>
                        )}
                        {movie.release_date && (
                            <span className="detail-release">
                                <i className="fas fa-calendar-alt"></i>
                                {new Date(movie.release_date).toLocaleDateString(
                                    'en-US',
                                    {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    }
                                )}
                            </span>
                        )}
                    </div>

                    {genres.length > 0 && (
                        <div className="movie-detail-genres">
                            {genres.map((genre) => (
                                <span key={genre.id} className="genre-tag">
                                    {genre.name}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="movie-detail-overview">
                        <h3>Overview</h3>
                        <p>{movie.overview || 'No overview available.'}</p>
                    </div>

                    <Link to="/" className="back-to-home">
                        <i className="fas fa-arrow-left"></i> Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
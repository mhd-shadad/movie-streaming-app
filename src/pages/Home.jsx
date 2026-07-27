// src/pages/Home.jsx
import React from 'react';
import MovieList from '../components/MovieList';
import './Home.css';

function Home({ movies, loading }) {
    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Discover Your Next Favorite Movie</h1>
                    <p>
                        Explore thousands of movies, get ratings, and find what
                        to watch tonight.
                    </p>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">10K+</span>
                            <span className="stat-label">Movies</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Genres</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">1M+</span>
                            <span className="stat-label">Users</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="movies-section">
                <MovieList
                    movies={movies}
                    loading={loading}
                    title="🔥 Popular Movies"
                />
            </section>
        </div>
    );
}

export default Home;
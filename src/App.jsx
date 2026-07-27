// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import SearchResults from './pages/SearchResults';
import { getPopularMovies, searchMovies } from './services/api';

function App() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const fetchPopular = async () => {
            setLoading(true);
            const data = await getPopularMovies();
            setPopularMovies(data.results || []);
            setLoading(false);
        };
        fetchPopular();
    }, []);

    useEffect(() => {
        if (location.pathname === '/') {
            setSearchQuery('');
            setSearchResults([]);
        }
    }, [location]);

    const handleSearch = async (query) => {
        setSearchQuery(query);
        if (query.trim()) {
            const data = await searchMovies(query);
            setSearchResults(data.results || []);
        } else {
            setSearchResults([]);
        }
    };

    return (
        <div className="app">
            <Header onSearch={handleSearch} searchQuery={searchQuery} />
            <main className="main-content">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                movies={popularMovies}
                                loading={loading}
                            />
                        }
                    />
                    <Route
                        path="/movies"
                        element={<Movies movies={popularMovies} />}
                    />
                    <Route
                        path="/movie/:id"
                        element={<MovieDetail />}
                    />
                    <Route
                        path="/search"
                        element={
                            <SearchResults
                                results={searchResults}
                                query={searchQuery}
                                loading={loading}
                            />
                        }
                    />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;0
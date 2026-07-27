// src/pages/SearchResults.jsx
import React from 'react';
import MovieList from '../components/MovieList';
import './SearchResults.css';

function SearchResults({ results, query, loading }) {
    return (
        <div className="search-results-page">
            <div className="page-header">
                <h1>
                    {query.trim()
                        ? `Results for "${query}"`
                        : 'Search Movies'}
                </h1>
                <p>
                    {results.length > 0
                        ? `Found ${results.length} movie${results.length > 1 ? 's' : ''}`
                        : query.trim()
                          ? 'No movies found. Try a different search.'
                          : 'Enter a search term to find movies.'}
                </p>
            </div>
            <MovieList movies={results} loading={loading} />
        </div>
    );
}

export default SearchResults;
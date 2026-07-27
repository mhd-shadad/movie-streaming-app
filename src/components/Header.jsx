// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ onSearch, searchQuery }) {
    const [query, setQuery] = useState(searchQuery || '');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
            navigate('/search');
        }
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <i className="fas fa-film"></i>
                    <span>Movimei</span>
                </Link>

                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>

                <form className="search-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="search-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </header>
    );
}

export default Header;
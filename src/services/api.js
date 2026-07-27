// src/services/api.js
const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async (page = 1) => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        if (!response.ok) throw new Error('Failed to fetch popular movies');
        return await response.json();
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return { results: [] };
    }
};

export const searchMovies = async (query, page = 1) => {
    try {
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
                query
            )}&page=${page}`
        );
        if (!response.ok) throw new Error('Failed to search movies');
        return await response.json();
    } catch (error) {
        console.error('Error searching movies:', error);
        return { results: [] };
    }
};

export const getMovieDetails = async (id) => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        if (!response.ok) throw new Error('Failed to fetch movie details');
        return await response.json();
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
};
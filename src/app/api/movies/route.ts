

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_KEY || '',
    },
};

async function getImagePath() {
    const path = await process.env.NEXT_PUBLIC_IMG_PATH;
    return path || "";
}

async function authenticate() {
    try {
        const response = await fetch(
            "https://api.themoviedb.org/3/authentication",
            options
        );
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function getPopularMovies(page: number = 1) {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
            options
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


async function getPopularTVShows(page: number = 1 ){
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,
            options
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getTrendingMovies() {
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
            options
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching trending movies:", error);
    }
}



async function getTrendingTVShows() {
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
            options
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching trending movies:", error);
    }
}

async function getMovieDetails(movieId: number) {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
            options
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getGenres() {
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/genre/movie/list?language=en",
            options
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getMoviesByGenre(genre: number, page: number) {
    const genres = await getGenres();

    const genreId = genres.genres.find((g: any) => g.id === genre);

    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreId.id}`,
            options
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getMovieTags(id: string) {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/keywords`,
            options
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getSearchedMovies(searchQuery: string) {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&language=en-US&page=1&include_adult=false`,
            options
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getMoviesByTag(tagId: string) {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_keywords=${tagId}`,
            options
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export {
    getImagePath,
    authenticate,
    getPopularMovies,
    getPopularTVShows,
    getTrendingMovies,
    getTrendingTVShows,
    getMovieDetails,
    getMoviesByGenre,
    getMoviesByTag,
    getMovieTags,
    getSearchedMovies,
};

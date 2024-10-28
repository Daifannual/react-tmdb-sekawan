export const SET_LOADING = "SET_LOADING";
export const SET_SEARCH = "SET_SEARCH";
export const SET_RATING = "SET_RATING";
export const SET_GENRES = "SET_GENRES";
export const SET_BY_GENRE = "SET_BY_GENRE";
export const SET_WATCHLIST = "SET_WATCHLIST";

export const NOW_PLAYING = "NOW_PLAYING";
export const POPULAR = "POPULAR";
export const TOP_RATED = "TOP_RATED";
export const UPCOMING = "UPCOMING";

export const SET_MOVIE_DETAIL = "SET_MOVIE_DETAIL";
export const MOVIE_VIDEOS = "MOVIE_VIDEOS";
export const RECOMMENDATIONS = "RECOMMENDATIONS";

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
});
export const setSearch = (payload) => ({
    type: SET_SEARCH,
    payload,
});
export const setRating = (payload) => ({
    type: SET_RATING,
    payload,
})
export const setWatchlist = (payload) => ({
    type: SET_WATCHLIST,
    payload,
})
export const setGenres = (payload) => ({
    type: SET_GENRES,    
    payload,
})
export const setByGenre = (payload) => ({
    type: SET_BY_GENRE,
    payload,
})

export const setMovieDetail = (payload) => ({
    type: SET_MOVIE_DETAIL,
    payload,
})
export const setMovieVideos = (payload) => ({
    type: MOVIE_VIDEOS,
    payload,
})
export const setRecommendations = (payload) => ({
    type: RECOMMENDATIONS,
    payload,
})

export const setNowPlaying = (payload) => ({
    type: NOW_PLAYING,
    payload,
});
export const setPopular = (payload) => ({
    type: POPULAR,
    payload,
});
export const setTopRated = (payload) => ({
    type: TOP_RATED,
    payload,
});
export const setUpcoming = (payload) => ({
    type: UPCOMING,
    payload,
});
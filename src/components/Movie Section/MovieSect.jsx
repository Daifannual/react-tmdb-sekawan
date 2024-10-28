// Movie.js
import React, { useEffect, useCallback, useMemo } from "react";
import MovieSectView from "./MovieSectView";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setNowPlaying,
  setPopular,
  setUpcoming,
  setTopRated,
} from "../../store/actions/movieAction";

const Movie = () => {
  const dispatch = useDispatch();

  const { nowPlaying, popular, upcoming, topRated } = useSelector(
    (state) => state.movie
  );

  const headers = useMemo(
    () => ({
      accept: "application/json",
      Authorization: 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjViZmZhMmU2MDRiZjk4MGE2NDM3ODBiNjg4NjZhZSIsIm5iZiI6MTcyODY0MjE1My4zNzM1NTYsInN1YiI6IjY3MDQ4NzdkYmQ3Y2Q4NmRhNTFkMmZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GY2x5Zmhjc2aT_tWdztJlzWORWoq0Skb2vEm7U0ht4o",
    }),
    []
  );

  const fetchData = useCallback(
    async (endpoint, action, pages = 1) => {
      try {
        for (let page = 1; page <= pages; page++) {
          const response = await axios.get(`${endpoint}?page=${page}`, { headers });
          dispatch(action(response.data.results));
        }
      } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
      }
    },
    [dispatch, headers]
  );

  useEffect(() => {
    fetchData("https://api.themoviedb.org/3/movie/now_playing", setNowPlaying, 2); // Mengambil 2 halaman
    fetchData("https://api.themoviedb.org/3/movie/popular", setPopular, 2);
    fetchData("https://api.themoviedb.org/3/movie/upcoming", setUpcoming, 2);
    fetchData("https://api.themoviedb.org/3/movie/top_rated", setTopRated, 2);
  }, [fetchData]);

  return (
    <div>
      <MovieSectView title="Now Playing" movies={nowPlaying} category="now_playing" />
      <MovieSectView title="Popular" movies={popular} category="popular" />
      <MovieSectView title="Top Rated" movies={topRated} category="top_rated" />
      <MovieSectView title="Upcoming" movies={upcoming} category="upcoming" />
    </div>
  );
};

export default Movie;

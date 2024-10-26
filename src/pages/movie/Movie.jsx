import React, { useCallback, useEffect, useMemo, useState } from "react";
import MovieView from "./MovieView";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setGenres, setSearch } from "../../store/actions/movieAction";
import { useSearchParams } from "react-router-dom";

const Movie = () => {
  const dispatch = useDispatch();
  const [selectedGenre, setSelectedGenre] = useState(null);

  const searchMovies = useSelector((state) => state.movie.search);
  const genres = useSelector((state) => state.movie.genres);

  const [searchParam, setSearchParam] = useSearchParams();
  const handleSearch = searchParam.get("query");

  const headers = useMemo(
    () => ({
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjViZmZhMmU2MDRiZjk4MGE2NDM3ODBiNjg4NjZhZSIsIm5iZiI6MTcyODY0MjE1My4zNzM1NTYsInN1YiI6IjY3MDQ4NzdkYmQ3Y2Q4NmRhNTFkMmZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GY2x5Zmhjc2aT_tWdztJlzWORWoq0Skb2vEm7U0ht4o",
    }),
    []
  );

  const fetchSearch = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${handleSearch}`,
        { headers }
      );
      dispatch(setSearch(response.data.results));
    } catch (error) {
      console.error("Error fetching search movies:", error);
    }
  }, [dispatch, headers, handleSearch]);

  const fetchGenres = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list",
        { headers }
      );
      dispatch(setGenres(response.data.genres));
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  }, [dispatch, headers]);

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  useEffect(() => {
    if (handleSearch) {
      fetchSearch();
    } else {
      dispatch(setSearch([]));
    }
  }, [handleSearch, fetchSearch, dispatch]);

  const handleChange = (input) => {
    if (input === "") {
      setSearchParam({});
      dispatch(setSearch([]));
    } else {
      setSearchParam({ query: input });
    }
  };

  const dataToDisplay = searchMovies.length > 0 ? searchMovies : [];

  return (
    <div>
      <MovieView
        dataToDisplay={dataToDisplay}
        genres={genres}
        onSearchChange={(input) => handleChange(input.target.value)}
        hasSearch={!handleSearch}
      />
    </div>
  );
};

export default Movie;

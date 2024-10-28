import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setByGenre } from "../../store/actions/movieAction";
import { Link } from "react-router-dom";
import { Star,ChevronLeft } from "lucide-react";
import { Pagination } from "@nextui-org/pagination";

const MovieGenreView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const genres = useSelector((state) => state.movie.genres);
  const movieByGenre = useSelector((state) => state.movie.movieByGenre);

  useEffect(() => {
    const fetchMovieByGenre = async (genreId) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjViZmZhMmU2MDRiZjk4MGE2NDM3ODBiNjg4NjZhZSIsIm5iZiI6MTcyODY0MjE1My4zNzM1NTYsInN1YiI6IjY3MDQ4NzdkYmQ3Y2Q4NmRhNTFkMmZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GY2x5Zmhjc2aT_tWdztJlzWORWoq0Skb2vEm7U0ht4o",
            },
          }
        );
        dispatch(setByGenre(response.data.results));
      } catch (error) {
        console.error("Error fetching movies by genre:", error);
      }
    };

    if (id) {
      fetchMovieByGenre(id);
    }
  }, [id, dispatch]);

  return (
    <div>
      <div className="flex justify-between items-center mx-6">
        <div className="w-max">
          <p className="font-medium text-zinc-400 dark:text-zinc-500">
            Genre
          </p>
          <h1 className="text-4xl font-bold text-zinc-600 dark:text-zinc-300 mb-4">
            {genres.find((genre) => genre.id === parseInt(id))?.name}
          </h1>
        </div>
        <div>
          <Link to={"/movie"} className="flex items-center bg-white dark:bg-zinc-800 py-1 px-3 rounded-xl text-xs gap-2"><ChevronLeft/>Back</Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {movieByGenre.map((movie) => (
          <div
            className="relative w-1/5 my-6 flex-shrink-0 group"
            key={movie.id}
          >
            <Link to={`/detail/${movie.id}`}>
              <img
                className="rounded-xl hover:brightness-90 transition-all duration-300"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="absolute flex justify-around items-center w-full bottom-0 px-0 py-2 rounded-b-xl backdrop-blur-md bg-zinc-800/60 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <div className="">
                  <h1 className="text-sm w-32 font-semibold truncate text-white">
                    {movie.title}
                  </h1>
                  <p className="text-xs font-semibold text-gray-400">
                    {new Date(movie.release_date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <span className="flex py-2 px-2 w-16 rounded-3xl justify-around text-xs backdrop-blur-md bg-zinc-700/40 items-center text-white">
                    <Star size={12} color="#fff700" />
                    {movie.vote_average.toFixed(1)}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGenreView;

// src/pages/MovieCategory.js
import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Star } from "lucide-react";
import { ChevronLeft } from "lucide-react";

const MovieCategory = () => {
  const { category } = useParams();
  const { nowPlaying, popular, upcoming, topRated, loading } = useSelector(
    (state) => state.movie
  );

  // Determine the movies to display based on the category
  let movies;
  switch (category) {
    case "now_playing":
      movies = nowPlaying;
      break;
    case "popular":
      movies = popular;
      break;
    case "upcoming":
      movies = upcoming;
      break;
    case "top_rated":
      movies = topRated;
      break;
    default:
      movies = [];
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mx-6">
        <div className="w-max">
          <p className="font-medium text-zinc-400 dark:text-zinc-500">Category</p>
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 mb-6 capitalize">
            {category.replace("_", " ")} Movies
          </h1>
        </div>
        <div>
          <Link
            to={"/movie"}
            className="flex items-center bg-white dark:bg-zinc-800 py-1 px-3 rounded-xl text-xs gap-2"
          >
            <ChevronLeft />
            Back
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {movies?.map((movie) => (
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

export default MovieCategory;

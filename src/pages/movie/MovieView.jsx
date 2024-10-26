import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import MovieSect from "../../components/Movie Section/MovieSect";
import { X } from "lucide-react";

const MovieView = ({ dataToDisplay, genres, onSearchChange, hasSearch }) => {
  return (
    <div className="mx-6">
      <div className="w-full h-60">
        <div className="text-center pt-12 mb-2 sticky top-24 z-0">
          <h1 className="text-5xl font-bold dark:text-white text-zinc-700">
            Dive Into the World of Movie.
          </h1>
        </div>
        <div className="relative mx-auto h-32 flex items-center z-40 bg-gradient-to-t dark:from-zinc-900 from-zinc-100 from-65%">
          <div className="relative w-2/5 mx-auto">
            <input
              type="text"
              id="Search"
              placeholder="Search"
              onChange={onSearchChange}
              className="w-full rounded-full border-gray-200 py-2 px-3 pe-10 dark:border-gray-700 dark:bg-zinc-800/45 dark:text-white"
            />
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <span className="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
      {hasSearch && (
        <div className="mb-4">
          {genres.map((genre) => (
            <Link
              to={`genre/${genre.id}`}
              key={genre.id}
              className="btn btn-sm  bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-700 m-1 rounded-xl focus:bg-zinc-600"
            >
              {genre.name}
            </Link>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-8 justify-evenly mb-8">
        {dataToDisplay.map((movie) => (
          <div
            className="relative w-1/5 my-1 flex-shrink-0 group"
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
      {dataToDisplay.length < 1 && (
        <MovieSect/>
      )}
    </div>
  );
};

export default MovieView;

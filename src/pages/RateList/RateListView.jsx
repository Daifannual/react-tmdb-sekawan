import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const RateListView = ({ ratingList }) => {
  return (
    <div>
      <p className="text-4xl text-zinc-700 dark:text-zinc-200 font-bold mb-4">Rate History</p>
      <div className="flex flex-wrap justify-start gap-12">
        {ratingList?.map((movie) => (
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
                <div>
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

export default RateListView;

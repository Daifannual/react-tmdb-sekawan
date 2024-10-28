import React from "react";
import DetailTabs from "../../components/ui/DetailTabs";
import { Tooltip } from "@nextui-org/tooltip";
import Rating from "../../components/ui/Rating";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import Watchlist from "../../components/ui/Watchlist";

const DetailView = ({ movieDetail, related }) => {
  console.log(related);
  if (!movieDetail) {
    return (
      <div className="mx-6 mt-2">
        <div className="relative mb-28">
          <div className="w-full h-96 bg-zinc-300 dark:bg-zinc-800 rounded-2xl animate-pulse"></div>
          <div className="absolute -bottom-20 z-20 m-6 w-2/12 h-80 bg-zinc-300 dark:bg-zinc-800 rounded-2xl animate-pulse mb-8"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-gray-100 dark:to-zinc-900 to-95% rounded-s-xl rounded-e-xl" />
        </div>
        <div className="w-1/12 h-10 bg-zinc-300 dark:bg-zinc-800 rounded-2xl animate-pulse mb-3"></div>
        <div className="w-full h-80 bg-zinc-300 dark:bg-zinc-800 rounded-2xl animate-pulse"></div>
      </div>
    );
  }
  return (
    <div className="mx-6 mt-2">
      <div className="relative mb-28">
        <img
          className="w-full h-96 object-cover rounded-2xl brightness-50"
          src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-gray-100 dark:to-zinc-900 to-95% rounded-s-xl rounded-e-xl" />
        <div className="absolute top-20 h-max flex">
          <img
            className=" w-1/5 p-1 m-6 rounded-3xl"
            src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
            alt=""
          />
          <div className="text-gray-800 dark:text-white content-end mb-12 w-full">
            <div className="flex justify-between items-center w-full">
              <div>
                <h1 className="justify-center text-4xl font-bold w-max">
                  {movieDetail.title}
                </h1>
                <div className="flex items-center my-2 w-max">
                  <p>
                    {new Date(movieDetail.release_date).toLocaleDateString(
                      "en-GB",
                      { year: "numeric" }
                    )}
                  </p>
                  <div className="h-4 border-l-2 border-gray-400 dark:border-gray-500 mx-3"></div>
                  <p>{movieDetail.status}</p>
                  <div className="h-4 border-l-2 border-gray-400 dark:border-gray-500 mx-3"></div>
                  <p>{movieDetail.runtime} min</p>
                </div>
                <Tooltip
                  key={"bottom"}
                  placement="top"
                  showArrow={true}
                  content="Leave a rating"
                  className="text-zinc-500 dark:text-zinc-400 dark:bg-zinc-800"
                >
                  <Rating />
                </Tooltip>
                <Watchlist />
              </div>

              <div className="px-3 py-2 mr-6 rounded-xl text-center w-24 text-zinc-600 dark:text-zinc-400">
                <p className="text-2xl font-extrabold">
                  {movieDetail.vote_average.toFixed(2)}
                </p>
                <p className="text-xs font-bold">
                  ({movieDetail.vote_count} vote)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailTabs movieDetail={movieDetail} />
      <div>
        <p className="text-xl font-bold mt-2 text-zinc-900 dark:text-white">
          Related Movies
        </p>
        <div className="flex overflow-x-scroll no-scrollbar gap-8">
          {related?.results.slice(0, 20).map((movie) => (
            <div
              className="relative w-1/6 my-6 flex-shrink-0 group"
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
                      {new Date(movie.release_date).toLocaleDateString(
                        "en-GB",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
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
    </div>
  );
};

export default DetailView;

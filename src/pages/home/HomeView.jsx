import React, { useState, useEffect } from "react";
import { Star, Heart, Info } from "lucide-react";
import { Link } from "react-router-dom";
import MovieSect from "../../components/Movie Section/MovieSect";

const HomeView = ({ nowPlaying, popular, upComing }) => {
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    if (popular.length > 0) {
      const random = Math.floor(Math.random() * popular.length);
      setRandomMovie(popular[random]);
    }
  }, [popular]);

  return (
    <div className="mx-6">
      {/* top content */}
      <div className="mt-2 mb-6">
        <figure className="relative">
          <div className="relative w-full">
            {/* <div className="w-full h-96 rounded-2xl brightness-75 bg-zinc-700"></div> */}
            {/* <iframe
              className="w-full h-96 rounded-2xl brightness-75 object-cover"
              width="1167"
              height="315"
              src="https://www.youtube.com/embed/A27xPYvqERw?autoplay=1&mute=1&controls=0&loop=1&fullscreen=1&cc_load_policy=0"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; loop; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe> */}
            <img
              src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`}
              alt=""
              className="w-full h-96 rounded-2xl brightness-75 object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 rounded-s-2xl" />
          <figcaption className="absolute m-10 top-2 h-3/4 w-2/5">
            {randomMovie ? ( // Periksa apakah randomMovie ada
              <>
                <h1 className="text-4xl font-bold text-white">
                  {randomMovie.title}
                </h1>
                <p className="mt-6 line-clamp-2">{randomMovie.overview}</p>
                <span className="flex my-4 py-1 px-2 w-16 rounded-3xl justify-around text-xs text-white backdrop-blur-md bg-zinc-700/40 items-center">
                  <Star size={12} color="#fff700" /> {randomMovie.vote_average}
                </span>
                <div className="flex absolute bottom-0 gap-4">
                  <button
                    type="button"
                    className=" flex items-center py-2.5 px-6 text-sm rounded-lg bg-red-600 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-red-700"
                  >
                    <span className="mr-2">
                      <Heart size={16} />
                    </span>
                    Mark as Favorite
                  </button>

                  <Link to={`/detail/${randomMovie.id}`}>
                    <button
                      type="button"
                      className=" flex items-center py-2.5 px-6 text-sm rounded-lg text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:text-zinc-300 hover:underline hover:underline-offset-4 hover:decoration-1 hover:decoration-red-600"
                    >
                      <span className="mr-2">
                        <Info size={16} />
                      </span>
                      Detail
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <span></span>
            )}
          </figcaption>
        </figure>
      </div>

      {/* Tampilan data Movie */}
      <MovieSect />
    </div>
  );
};

export default HomeView;

import React, { useCallback, useEffect, useMemo } from "react";
import HomeView from "./HomeView";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {

  const nowPlayingMovies = useSelector((state) => state.movie.nowPlaying);
  const popularMovies = useSelector((state) => state.movie.popular);
  const upComingMovies = useSelector((state) => state.movie.upcoming);
  const loading = useSelector((state) => state.movie.loading);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }

  return (
    <div>
      <HomeView
        nowPlaying={nowPlayingMovies}
        popular={popularMovies}
        upComing={upComingMovies}
      />
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import FavListView from "./FavListView";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setWatchlist } from "../../store/actions/movieAction";
import { use } from "framer-motion/client";
import axios from "axios";

const FavList = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.movie.watchlist);
  const loading = useSelector((state) => state.movie.loading);

  const fetchWatchlist = async () => {
    const watchlistConfig = {
      method: "GET",
      url: "https://api.themoviedb.org/3/account/21559355/watchlist/movies",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjViZmZhMmU2MDRiZjk4MGE2NDM3ODBiNjg4NjZhZSIsIm5iZiI6MTcyOTUwMzA5OC44MDM5MjEsInN1YiI6IjY3MDQ4NzdkYmQ3Y2Q4NmRhNTFkMmZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oc7OpAz2OpU8OZ78JfwavcE1Ynsj-b0b2Ck_qxkF0ME",
      },
    };

    try {
      dispatch(setLoading(true));
      const response = await axios.request(watchlistConfig);
      dispatch(setWatchlist(response.data.results));
    } catch (error) {
      console.error("Error fetching watchlist:", error);
      dispatch(setLoading(false));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchWatchlist();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }

  return (
    <div>
      <FavListView watchlist={Array.isArray(watchlist) ? watchlist : []} />
    </div>
  );
};

export default FavList;

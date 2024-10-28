import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setWatchlist } from "../../store/actions/movieAction";
import { toast, Toaster } from "sonner";
import { useParams } from "react-router-dom";
import { BookmarkPlus, BookmarkMinus } from "lucide-react";

const Watchlist = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.movie.watchlist);
  const { id } = useParams();

  const fetchWatchList = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/account_states`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjViZmZhMmU2MDRiZjk4MGE2NDM3ODBiNjg4NjZhZSIsIm5iZiI6MTcyODY0MjE1My4zNzM1NTYsInN1YiI6IjY3MDQ4NzdkYmQ3Y2Q4NmRhNTFkMmZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GY2x5Zmhjc2aT_tWdztJlzWORWoq0Skb2vEm7U0ht4o",
          },
        }
      );

      const isInWatchlist = response.data.watchlist || false;
      dispatch(setWatchlist(isInWatchlist));
    } catch (error) {
      console.error("Error fetching watchlist:", error);
    }
  };

  const addToWatchlist = async () => {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/account/21559355/watchlist`,
        {
          media_type: "movie",
          media_id: id,
          watchlist: true,
        },
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjViZmZhMmU2MDRiZjk4MGE2NDM3ODBiNjg4NjZhZSIsIm5iZiI6MTcyODY0MjE1My4zNzM1NTYsInN1YiI6IjY3MDQ4NzdkYmQ3Y2Q4NmRhNTFkMmZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GY2x5Zmhjc2aT_tWdztJlzWORWoq0Skb2vEm7U0ht4o",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        dispatch(setWatchlist(true));
        toast.success("Movie added to watchlist successfully.");
      }
    } catch (error) {
      toast.error(error.response?.data?.status_message || error.message);
    }
  };

  const removeFromWatchlist = async () => {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/account/21559355/watchlist`,
        {
          media_type: "movie",
          media_id: id,
          watchlist: false,
        },
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjViZmZhMmU2MDRiZjk4MGE2NDM3ODBiNjg4NjZhZSIsIm5iZiI6MTcyODY0MjE1My4zNzM1NTYsInN1YiI6IjY3MDQ4NzdkYmQ3Y2Q4NmRhNTFkMmZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GY2x5Zmhjc2aT_tWdztJlzWORWoq0Skb2vEm7U0ht4o",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        dispatch(setWatchlist(false));
        toast.success("Movie removed from watchlist successfully.");
      }
    } catch (error) {
      toast.error(error.response?.data?.status_message || error.message);
    }
  };

  useEffect(() => {
    fetchWatchList();
  }, [id]);

  return (
    <div className="mt-2">
      <Toaster />
      {watchlist ? (
        <button
          type="button"
          className="btn btn-xs bg-transparent border-none bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 hover:text-zinc-500 dark:hover:bg-zinc-700 dark:hover:text-zinc-300 ml-2"
          onClick={removeFromWatchlist}
        >
          <BookmarkMinus size={16} />
          Remove from Watchlist
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-xs bg-transparent border-none bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 hover:text-zinc-500 dark:hover:bg-zinc-700 dark:hover:text-zinc-300 ml-2"
          onClick={addToWatchlist}
        >
          <BookmarkPlus size={16} />
          Add to Watchlist
        </button>
      )}
    </div>
  );
};

export default Watchlist;

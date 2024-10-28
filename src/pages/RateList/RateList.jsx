import React, { useEffect } from "react";
import RateListView from "./RateListView";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setLoading, setRating } from "../../store/actions/movieAction";

const RateList = () => {
  const dispatch = useDispatch();
  const ratingList = useSelector((state) => state.movie.rating || []);
  const loading = useSelector((state) => state.movie.loading);

  const fetchRatedMovies = async () => {
    const ratedMoviesConfig = {
      method: "GET",
      url: "https://api.themoviedb.org/3/account/21559355/rated/movies",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjViZmZhMmU2MDRiZjk4MGE2NDM3ODBiNjg4NjZhZSIsIm5iZiI6MTcyOTUwMzA5OC44MDM5MjEsInN1YiI6IjY3MDQ4NzdkYmQ3Y2Q4NmRhNTFkMmZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oc7OpAz2OpU8OZ78JfwavcE1Ynsj-b0b2Ck_qxkF0ME",
      },
    };

    try {
      dispatch(setLoading(true));
      const response = await axios.request(ratedMoviesConfig);
      dispatch(setRating(response.data.results));
    } catch (error) {
      console.error("Error fetching rated movies:", error);
      dispatch(setLoading(false));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchRatedMovies();
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
      <RateListView ratingList={Array.isArray(ratingList) ? ratingList : []} />
    </div>
  );
};

export default RateList;

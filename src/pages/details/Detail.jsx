import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setLoading, setMovieDetail, setMovieVideos, setRecommendations } from "../../store/actions/movieAction";
import { setCredits, setImages } from "../../store/actions/otherAction";
import { useParams } from "react-router-dom";
import DetailView from "./DetailView";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail,recommendations, loading } = useSelector((state) => state.movie);

  const headers = useMemo(
    () => ({
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjViZmZhMmU2MDRiZjk4MGE2NDM3ODBiNjg4NjZhZSIsIm5iZiI6MTcyODY0MjE1My4zNzM1NTYsInN1YiI6IjY3MDQ4NzdkYmQ3Y2Q4NmRhNTFkMmZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GY2x5Zmhjc2aT_tWdztJlzWORWoq0Skb2vEm7U0ht4o",
    }),
    []
  );

  useEffect(() => {
    const fetchMovieData = async () => {
      dispatch(setLoading(true));
      try {
        const [movieDetailRes, movieVideosRes, creditsRes, recommendationsRes] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/movie/${id}`, { headers }),
          axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, { headers }),
          axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, { headers }),
          axios.get(`https://api.themoviedb.org/3/movie/${id}/similar`, { headers }),
          axios.get(`https://api.themoviedb.org/3/movie/${id}/images`, { headers }),
        ]);

        dispatch(setMovieDetail(movieDetailRes.data));
        dispatch(setMovieVideos(movieVideosRes.data));
        dispatch(setCredits(creditsRes.data));
        dispatch(setRecommendations(recommendationsRes.data));
        dispatch(setImages(movieDetailRes.data?.images?.backdrops));
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchMovieData();
  }, [dispatch, id, headers]);

  return (
    <div>
      <DetailView movieDetail={movieDetail} related={recommendations} />
    </div>
  );
};

export default Detail;

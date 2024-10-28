import React, { useEffect, forwardRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setRating } from "../../store/actions/movieAction";
import { toast, Toaster } from "sonner";
import { useParams } from "react-router-dom";
import { Trash2 } from "lucide-react";

const Rating = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.movie.rating);
  const { id } = useParams();

  const fetchUserRating = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/account_states`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjViZmZhMmU2MDRiZjk4MGE2NDM3ODBiNjg4NjZhZSIsIm5iZiI6MTcyODY0MjE1My4zNzM1NTYsInN1YiI6IjY3MDQ4NzdkYmQ3Y2Q4NmRhNTFkMmZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GY2x5Zmhjc2aT_tWdztJlzWORWoq0Skb2vEm7U0ht4o",
          }
        }
      );

      if (response.data.rated.value) {
        dispatch(setRating(response.data.rated.value));
      }
    } catch (error) {
      console.error("Error fetching user rating:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchUserRating();
  }, [id]);

  const handleRatingChange = async (value) => {
    dispatch(setRating(value));
    dispatch(setLoading(true));

    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/movie/${id}/rating`,
        {
          value: value,
        },
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjViZmZhMmU2MDRiZjk4MGE2NDM3ODBiNjg4NjZhZSIsIm5iZiI6MTcyODY0MjE1My4zNzM1NTYsInN1YiI6IjY3MDQ4NzdkYmQ3Y2Q4NmRhNTFkMmZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GY2x5Zmhjc2aT_tWdztJlzWORWoq0Skb2vEm7U0ht4o",
          }
        }
      );

      if (response.status === 201) {
        toast.success(`Rating submitted successfully.`);
      }
    } catch (error) {
      toast.error(error.response?.data?.status_message || error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleRatingDelete = async () => {
    dispatch(setLoading(true));

    try {
      const response = await axios.delete(
        `https://api.themoviedb.org/3/movie/${id}/rating`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjViZmZhMmU2MDRiZjk4MGE2NDM3ODBiNjg4NjZhZSIsIm5iZiI6MTcyODY0MjE1My4zNzM1NTYsInN1YiI6IjY3MDQ4NzdkYmQ3Y2Q4NmRhNTFkMmZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GY2x5Zmhjc2aT_tWdztJlzWORWoq0Skb2vEm7U0ht4o",
          }
        }
      );

      if (response.status === 200) {
        dispatch(setRating(0)); // Reset rating setelah dihapus
        toast.success(`Rating deleted successfully.`);
      }
    } catch (error) {
      toast.error(error.response?.data?.status_message || error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div ref={ref} className="">
      <Toaster />
      <div className="rating rating-sm gap-1">
        <input
          type="radio"
          name="rating-9"
          className="rating-hidden"
        />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
          <input
            key={star}
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={star}
            onChange={() => handleRatingChange(star)}
            checked={star === rating} // Cek apakah rating sama dengan star
          />
        ))}
      </div>

      {rating > 0 && (
        <button
          type="button"
          className="btn btn-xs bg-transparent hover:text-red-400 ml-2"
          onClick={handleRatingDelete}
        >
          <Trash2 size={12} />Delete
        </button>
      )}
    </div>
  );
});

export default Rating;

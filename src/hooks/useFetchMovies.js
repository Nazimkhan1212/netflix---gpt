import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../slices/moviesSlice";

const useFetchMovies = (url) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(url, API_OPTIONS);
      const { results } = await data.json();
      dispatch(addNowPlayingMovies(results));
    };
    getNowPlayingMovies();
  }, []);
};

export default useFetchMovies;

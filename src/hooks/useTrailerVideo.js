import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../slices/moviesSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovieVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const { results } = await data.json();
      const findTrailer = results.find((video) => video.type === "Trailer");
      const trailer = findTrailer ? findTrailer : results[0];
      dispatch(addTrailerVideo(trailer));
    };
    getMovieVideos();
  }, [movieId]);
};
export default useTrailerVideo;

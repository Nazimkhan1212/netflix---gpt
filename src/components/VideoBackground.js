import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideo(movieId);
  return (
    <div className="w-screen h-screen aspect-video ">
      <iframe
        className="w-screen h-screen aspect-video min-h-screen"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&playlist=${trailer?.key}&loop=1`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};
export default VideoBackground;

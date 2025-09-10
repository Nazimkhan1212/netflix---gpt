const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen absolute pt-[17%] pl-20 text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold py-3">{title}</h1>
      <p className="w-64">
        {overview.length > 110 ? overview.substring(0, 110) + "..." : overview}
      </p>
      <div className="mt-2">
        <button className="bg-white font-semibold text-black px-10 py-2 mr-2 text-md rounded-md hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-400 font-semibold text-white px-8 py-2 text-md rounded-md">
          more Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;

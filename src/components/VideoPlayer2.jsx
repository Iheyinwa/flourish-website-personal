import video from "../assets/videos/video1.mp4";
import star from "../assets/icons/greenstar.png";

const VideoPlayer2 = () => {
  return (
    <div className="relative flex flex-col mx-auto justify-center items-center w-[90%] xl:w-[80%] rounded-2xl z-0">
      <div className="absolute top-0 -left-7 z-0">
        <img src={star} alt="star" className="w-[55.19px] h-[55.19px]" />
      </div>
      <video
        src={video}
        controls
        muted
        loop
        playsInline
        autoPlay
        className="flex relative justify-center items-center w-full h-[600px] rounded-2xl bg-black object-contain max-md:h-[500px] z-10"
      />
    </div>
  );
};

export default VideoPlayer2;

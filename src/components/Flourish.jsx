import VideoPlayer2 from "./VideoPlayer2";
import web from "../assets/icons/webHero.png";
import star from "../assets/icons/starhero.png";
import Button from "./UI/Button";

export default function Flourish() {
  return (
    <div className="relative flex flex-col pt-[90px] ">
      <div className="flex relative gap-5 flex-col justify-center items-center mx-[20px] lg:mx-[40px] xl:mx-[150px] h-full pb-[90px] ">
        <div className="flex flex-col justify-center items-center w-[90%] md:w-[70%] lg:w-[50%] font-dmserif h-full">
          <div>
            <h1 className="md:text-[89.41px] leading-[83%] text-center tracking-tighter text-black w-full text-7xl ">
              We
              <span className=" text-brandBlue ml-5 ">Flourish</span>
            </h1>
            <h1 className="md:text-[89.41px] leading-[83%] text-center tracking-tighter text-black w-full text-7xl ">
              on Every Side!
            </h1>
          </div>
          <p className="mt-6 text-center text-[18px] tracking-[-1%] leading-[143%] text-black  w-full font-redhat">
            Experience the joy of fellowship and personal growth at our upcoming
            events at the Flourish Generation Church, where deep connection and
            spiritual rejuvenation earnestly awaits you. Here, you will get a
            glimpse of our upcoming events, stay updated for what will come
            next!
          </p>
          <div className="flex flex-col [@media(min-width:420px)]:flex-row gap-3  mt-4 text-xl tracking-normal">
            <Button
              route="/whoweare"
              className="text-white font-bold whitespace-nowrap bg-brandBlue hover:bg-lightBlue hover:text-brandBlue font-redhat py-[16px] px-[42px] text-[18.1px] leading-[93%] tracking-[1%]"
            >
              Who we are
            </Button>
            <Button
              route="/sermons"
              className="text-brandBlue whitespace-nowrap bg-lightBlue hover:bg-brandBlue hover:text-white font-bold font-redhat py-[16px] px-[42px] text-[18.1px] leading-[93%] tracking-[1%]"
            >
              Sermons
            </Button>
          </div>
        </div>

        {/* STAR ICON */}
        <div className="absolute -top-20 left-0">
          <img src={star} alt="star" className="w-[55.19px] h-[55.19px]" />
        </div>

        {/* WEB ICON */}
        <div className="absolute right-10 bottom-0 md:bottom-28">
          <img src={web} alt="web" className="w-[119.39px] h-[108.03px]" />
        </div>
      </div>

      {/* <ImagesSection/> */}
      <VideoPlayer2 />
    </div>
  );
}

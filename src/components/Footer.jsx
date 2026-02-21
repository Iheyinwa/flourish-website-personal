import { Link } from "react-router";
import FGClogo from "../assets/images/FGClogo.png";
import { FaYoutube, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex flex-col gap-5 justify-center pt-[50px] bg-white">
      {/* QUICK LINKS AND FORM */}
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:justify-between gap-[50px] md:items-center px-[20px] lg:px-[40px] xl:px-[150px]">
        <div className="flex flex-col justify-between gap-[20px] md:w-2/6 text-black">
          <img loading="lazy" src={FGClogo} className="w-[104px] h-[39px]" />
          <div className="font-redhat leading-[143%] tracking-[-1%]">
            Experience the joy of fellowship and personal growth at our upcoming
            events at the Flourish Generation Church, where deep connection and
            spiritual rejuvenation earnestly awaits you. Here, you will get a
            glimpse of our upcoming events, stay updated for what will come
            next!
          </div>
        </div>
        <div className="flex flex-col justify-between gap-[20px] md:w-1/6 pt-[12px]">
          <p className="text-lg font-bold tracking-[-1%] font-redhat leading-[134%]">
            Quick Links
          </p>
          <div className="flex flex-col gap-[10px]">
            <Link to="/">
              <p className="font-redhat leading-[142%] tracking-[-1%]">Home</p>
            </Link>
            <Link to="/whoweare">
              <p className="font-redhat leading-[142%] tracking-[-1%]">About</p>
            </Link>
            <Link to="/aboutpace">
              <p className="font-redhat leading-[142%] tracking-[-1%]">
                About PACE
              </p>
            </Link>
            <Link to="/give">
              <p className="font-redhat leading-[142%] tracking-[-1%]">Give</p>
            </Link>
            <Link to="/expressions">
              <p className="font-redhat leading-[142%] tracking-[-1%]">
                Expressions
              </p>
            </Link>
            <Link to="/sermons">
              <p className="font-redhat leading-[142%] tracking-[-1%]">
                Sermons
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-[20px] lg:w-3/6">
          <p className="font-dmserif text-[31.83px] leading-[102%] tracking-[-2.5%]">
            To get update on upcoming events and sermons{" "}
          </p>
          <form className="flex flex-col gap-[20px]">
            <div className="flex flex-col md:flex-row justify-between gap-[11.44px]">
              <input
                placeholder="First Name"
                className="py-[25px] w-full px-[24px] rounded-[70.12px] font-redhat leading-[101%] placeholder:pl-[20px] placeholder:text-black tracking-[-1%] bg-grey60"
              />
              <input
                placeholder="Email Address"
                className="py-[25px] w-full px-[24px] bg-grey60 placeholder:pl-[20px] placeholder:text-black rounded-[70.12px] font-redhat leading-[101%] tracking-[-1%]"
              />
            </div>
            <button
              type="submit"
              className="text-white w-fit rounded-[29.33px] bg-brandBlue hover:bg-lightBlue hover:text-brandBlue font-redhat py-[21px] px-[36px] text-[18.1px] leading-[93%] tracking-[1%]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="flex items-center px-[20px] lg:px-[40px] xl:px-[150px] py-[27px] w-full border-t border-solid border-[#CDCDCD] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="h-full inline-flex gap-2 items-center">
            <span className="text-[22px]">&copy;</span>
            <p className="font-medium leading-[20px] tracking-[0.5%] font-redhat max-md:max-w-full h-full">
              Copyright Flourish Generation Church {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex gap-5 justify-between items-center my-auto">
            <Link to="https://web.facebook.com/flourishnationglobal">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ec4cf7f9a07142ad92f2384bd45e67a215712a049b17251b7fa3bc984a1888b?apiKey=873e47fe7796454e93671642132d9742&"
                className="shrink-0 self-stretch w-3.5 aspect-[0.52] fill-black"
              />
            </Link>
            <Link to="https://www.youtube.com/@flourishgc_global">
              <FaYoutube size={29} />
            </Link>
            <Link to="https://www.tiktok.com/@flourishgc_global?_r=1&_t=ZS-93pWJGvNwN0">
              <FaTiktok size={29} />
            </Link>
            <Link to="https://www.instagram.com/flourishgenerationchurch/">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e269dfa2a6ee9590066322ffa7856d3ba4c3ff219f49bde3ec8e4f9ee11b845a?apiKey=873e47fe7796454e93671642132d9742&"
                className="shrink-0 self-stretch my-auto w-6 aspect-square fill-black"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

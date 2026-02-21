import Navbar from "./Navbar";
import star from "../assets/icons/greenstar.png";

export default function WeFlourish() {
  return (
    <>
      <section className=" bg-about-hero flex justify-start flex-col items-start bg-no-repeat bg-cover h-full min-[400px]:h-[600px]">
        <Navbar />
        <div className="flex flex-col gap-[10px] md:gap-[32px] justify-center relative my-auto pl-[20px] lg:pl-[40px] xl:pl-[150px]">
          <div className="justify-center flex flex-col items-center py-[18.88px] text-sm font-extrabold tracking-[1%] w-fit leading-[93%] text-brandBlue whitespace-nowrap bg-lightBlue font-redhat rounded-[65.48px] px-[33.31px]">
            <p>The Family of Flourish GC</p>
          </div>
          <div className="flex flex-col gap-[16px] text-white">
            <h1 className="text-6xl md:text-[78.28px] leading-[95%] tracking-[-2.5%] text-white font-dmserif  w-fit">
              Eternity is set <br />
              in our hearts
            </h1>
            {/* WRITTEN STATEMENT */}
            <p className="font-stemRegular tracking-[-1%] w-[90%] pb-10 min-[450px]:pb-0 min-[450px]:w-[60%] min-[550px]:w-1/2 md:w-[35%] leading-[143%]">
              Experience the joy of fellowship and personal growth at our
              upcoming events at the Flourish Generation Church, where deep
              connection and spiritual rejuvenation earnestly awaits you. Here,
              you will get a glimpse of our upcoming events, stay updated for
              what will come next!
            </p>
          </div>
        </div>
      </section>
      <div className="relative top-0 left-3 w-fit">
        <img src={star} alt="star" className="w-[55.19px] h-[55.19px]" />
      </div>
    </>
  );
}

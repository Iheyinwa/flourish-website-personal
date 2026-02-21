import greenstar from "../assets/icons/halfgreenstar.png";
import yellowstar from "../assets/icons/yellowStar.png";
import line from "../assets/icons/expressionsLine.png";

export default function Paysection() {
  return (
    <section className="flex justify-center items-center px-[20px] lg:px-[40px] xl:px-[150px]">
      <div className="flex flex-col justify-center gap-[30px] pt-[100px] pb-[50px] rounded-[25px] relative bg-[#FAFAFA] w-full">
        <img
          loading="lazy"
          src={greenstar}
          alt=""
          className="absolute top-5 left-0 w-fit h-fit"
        />
        <div className="flex flex-col relative left-[20px] top-1/3 md:left-[40px] gap-4 w-[90%] min-[500px]:w-[70%] xl:w-[55%]">
          <h1 className="md:text-[78.28px] font-dmserif tracking-[-2.5%] leading-[93%] text-6xl">
            Invest in what <br /> you truly <br /> believe in{" "}
          </h1>
          <p className=" tracking-[-1%] leading-[143%] text-black max-md:max-w-full font-dmserif">
            At the Flourish Generation Church, we believe that everything we
            have ultimately belongs to God and that we are stewards entrusted
            with managing his resources wisely. By putting our money where our
            faith is, we prioritize using our financial resources in ways that
            honour God and partner with him for the advancement of his Kingdom.
          </p>
        </div>
        <img
          loading="lazy"
          src={yellowstar}
          alt=""
          className="w-fit h-fit absolute right-0 top-[156px]"
        />
        <img
          loading="lazy"
          src={line}
          alt=""
          className="w-fit h-fit absolute -right-0 top-[250px]"
        />
      </div>
    </section>
  );
}

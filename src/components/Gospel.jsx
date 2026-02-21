import PropTypes from "prop-types";
import greenstar from "../assets/icons/halfgreenstar.png";
import yellowstar from "../assets/icons/yellowStar.png";
import line from "../assets/icons/expressionsLine.png";
function CountryCard({ count, label }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center items-center px-9 py-10 w-full text-center text-black whitespace-nowrap rounded-xl bg-[#F8F8F8] max-md:px-5 max-md:mt-10">
        <p className="md:text-[78.85px] font-stemBold tracking-[-2.5%] leading-[89%] text-6xl">
          {count}
        </p>
        <p className="ext-[25.26px] font-stemRegular tracking-[-1%] leading-[143%]">
          {label}
        </p>
      </div>
    </div>
  );
}

CountryCard.propTypes = {
  count: PropTypes.string,
  label: PropTypes.string,
};

export default function Gospel() {
  const countryData = [
    { count: 1, label: "Country" },
    { count: "200", label: "Members" },
    { count: 1, label: "Expression" },
  ];

  return (
    <section className="flex justify-center items-center px-[20px] lg:px-[40px] xl:px-[150px] overflow-x-hidden">
      <div className="flex flex-col justify-center gap-[30px] w-full pt-[100px] pb-[50px] rounded-[25px] relative bg-[#FAFAFA]">
        <img
          loading="lazy"
          src={greenstar}
          alt=""
          className="absolute top-5 left-0 w-fit h-fit"
        />
        <div className="flex flex-col relative left-[20px] md:left-[40px] top-1/2 gap-4 w-[90%] min-[500px]:w-[70%] xl:w-[55%]">
          <h1 className="md:text-[78.28px] font-dmserif tracking-[-2.5%] leading-[89%] text-6xl">
            Until the Gospel fills the earth{" "}
          </h1>
          <h1 className="text-brandBlue md:text-[78.28px] font-dmserif tracking-[-2.5%] leading-[89%] text-6xl">
            as the waters cover the sea
          </h1>
          {/* <p className=" tracking-[-1%] leading-[143%] text-black max-md:max-w-full font-dmserif">
            Who we are Who we are Who we are Who we are Who we are Who we are
            Who we are Who we are Who we are Who we areWho we are Who we are Who
            we are Who we are Who we are Who we areWho we are Who we are Who we
            are Who we are
          </p> */}
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
          className="w-fit h-fit absolute  -right-24 lg:-right-36 hidden min-[500px]:block top-[320px] z-50"
        />
        <div className="justify-between relative p-9 bottom-0  bg-white rounded-3xl max-md:px-5 mx-[20px] md:mx-[40px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {countryData.map((data, index) => (
              <CountryCard key={index} count={data.count} label={data.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

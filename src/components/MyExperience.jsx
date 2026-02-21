import { useState } from "react";
import { testimonies } from "../constants/data";
import { Caret } from "../svg/svg";
import PropTypes from "prop-types";

export default function MyExperience({
  bgColor,
  cardColor,
  textColor,
  activeArrow,
  inactiveArrow,
}) {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleNext = () => {
    if (current < testimonies.length - 1) setCurrent(current + 1);
  };

  const isFirst = current === 0;
  const isLast = current === testimonies.length - 1;

  return (
    <section
      className={`${bgColor} gap-[43px] rounded-[5px] flex flex-col justify-center items-center h-full px-[20px] lg:px-[40px] xl:px-[150px] py-[118px]`}
    >
      <div
        className={`${cardColor} flex flex-col w-full py-[20px] md:py-[92px] px-[20px] md:px-[99px] rounded-[22px]`}
      >
        <div key={current} className="flex flex-col gap-[66px] fade-in">
          <p
            className={`font-redhat text-[25px] md:text-[36px] ${textColor} leading-[143%] tracking-[-1%]`}
          >
            {testimonies[current].testimony}
          </p>
          <div className=" inline-flex items-center gap-[19px]">
            <img
              src={testimonies[current].img}
              className="w-[59.22px] h-[58.63px] hidden rounded-[48861.34px]"
            />
            <h1
              className={`${textColor} font-stemRegular font-medium text-[20px] leading-[143%] tracking-[-1%]`}
            >
              {testimonies[current].name}
            </h1>
          </div>
        </div>
      </div>
      <div className="self-end flex gap-[1px]">
        <button
          className={`w-[45.94px] h-[42px] flex justify-center items-center rounded-l-[8px] ${
            isFirst
              ? `${inactiveArrow} cursor-not-allowed`
              : `${activeArrow} cursor-pointer`
          }`}
          onClick={handlePrev}
          disabled={isFirst}
        >
          <Caret />
        </button>
        <button
          className={`w-[45.94px] h-[42px] flex justify-center items-center rounded-r-[8px] ${
            isLast
              ? `${inactiveArrow} cursor-not-allowed`
              : `${activeArrow} cursor-pointer`
          }`}
          onClick={handleNext}
          disabled={isLast}
        >
          <Caret className={"rotate-180"} />
        </button>
      </div>
    </section>
  );
}

MyExperience.propTypes = {
  bgColor: PropTypes.string,
  cardColor: PropTypes.string,
  textColor: PropTypes.string,
  inactiveArrow: PropTypes.string,
  activeArrow: PropTypes.string,
};

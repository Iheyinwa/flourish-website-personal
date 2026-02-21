import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
import { Arrow } from "../svg/svg";
import { events } from "../constants/data";

const EventCard = ({ title, description, src }) => (
  <div className="flex flex-col gap-[47px] text-base rounded-2xl tracking-normal leading-6 text-black w-[448px] overflow-x-hidden">
    <div className="flex overflow-hidden relative rounded-lg flex-col items-end px-16 pt-3 pb-20 w-full transition-transform duration-500 ease-in-out hover:scale-105  min-h-[426px]">
      <img
        loading="lazy"
        src={src}
        className="object-cover object-top absolute inset-0 size-full"
      />
    </div>

    <div className="flex flex-col h-full gap-[20px]">
      <h3 className="text-[40.73px] tracking-[-1%] leading-[143%] font-stemBold max-md:max-w-full">
        {title}
      </h3>
      <p className="leading-[143%] tracking-[-1%] max-md:max-w-full font-stemRegular">
        {description}
      </p>
    </div>
  </div>
);

export default function WhatsComing() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Update arrow states
  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col py-[150px] gap-[60px] bg-white">
      <section className="flex min-[500px]:px-[20px] px-[20px] lg:px-[40px] xl:px-[150px] flex-col gap-4 min-[700px]:flex-row min-[500px]:justify-between items-end">
        <div className="flex flex-col self-start h-full gap-[16px] min-[700px]:w-1/2 ">
          <div className="justify-center flex flex-col items-center py-[18.88px] text-sm font-extrabold tracking-[1%] w-fit leading-[93%] text-brandBlue whitespace-nowrap bg-brandBlue/10 font-redhat rounded-[65.48px] px-[33.31px]">
            Events
          </div>

          <h1 className="md:text-[76px] tracking-[-2.5%] font-dmserif text-black leading-[98%] w-fit text-7xl">
            What&apos;s Coming
          </h1>

          <p className=" w-fit justify-center text-lg text-justify tracking-[-1%] leading-[151%] text-black font-stemRegular">
            Experience the joy of fellowship and personal growth at our upcoming
            events at the Flourish Generation Church, where deep connection and
            spiritual rejuvenation earnestly awaits you. Here, you will get a
            glimpse of our upcoming events, stay updated for what will come
            next!
          </p>
        </div>
        <div className="flex justify-between items-center gap-[2.7px]">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            disabled={!canScrollLeft}
            className={`flex justify-center items-center rounded-[95.61px] w-[79.65px] h-[58.05px] transition-colors duration-200 ${
              canScrollLeft ? "bg-black" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <Arrow />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            disabled={!canScrollRight}
            className={`flex justify-center items-center rounded-[95.61px] w-[79.65px] h-[58.05px] transition-colors duration-200 ${
              canScrollRight ? "bg-black" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <Arrow className={`rotate-180`} />
          </button>
        </div>
      </section>

      <div className="min-[500px]:pl-[20px] pl-[20px] lg:pl-[40px] xl:pl-[150px]">
        <div
          className="flex gap-4 md:gap-8 overflow-x-auto scroll-smooth"
          ref={scrollRef}
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-[81px] h-full">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
};

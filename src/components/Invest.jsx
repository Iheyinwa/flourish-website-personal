import { Link } from "react-router";
import Button from "./UI/Button";
Link;

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row md:justify-between gap-5 md:gap-20 items-center min-[500px]:px-[20px] px-[20px] py-[20px] min-[500px]:py-[60px] lg:px-[40px] xl:px-[150px] xl:py-[150px] bg-white">
      <div className="flex flex-col justify-center gap-[32px] md:w-[498px] text-black">
        <h1 className="md:text-[78.28px] font-dmserif tracking-[-2.5%] leading-[93%] text-6xl">
          Invest in what <br />
          you truly <br />
          believe in
        </h1>
        <p className="tracking-[-1%] leading-[143%] font-stemRegular">
          At the Flourish Generation Church, we believe that everything we have
          ultimately belongs to God and that we are stewards entrusted with
          managing his resources wisely. By putting our money where our faith
          is, we prioritize using our financial resources in ways that honour
          God and partner with him for the advancement of his Kingdom.
        </p>
        <Button
          route="/give"
          className="text-white font-bold whitespace-nowrap bg-brandBlue hover:bg-lightBlue hover:text-brandBlue font-redhat py-[16px] px-[42px] text-[18.1px] leading-[93%] tracking-[1%]"
        >
          Give now
        </Button>
      </div>
      <div className=" md:w-[541px] rounded-b-[15px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/32f6c1564ed1dc78f95fcdaa01d8c71d7cafc2c00de7bb4fa0a9f59d0d71ec9a?apiKey=873e47fe7796454e93671642132d9742&"
          alt="Worship Offering Tithe Prophetic Giving"
          className="w-fit rounded-b-[15px] "
        />
      </div>
    </section>
  );
}

export default function Invest() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}

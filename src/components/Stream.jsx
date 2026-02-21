import PropTypes from "prop-types";

function SocialCard({
  title,
  description,
  ctaText,
  url,
  image,
  imageAlt,
  width,
  height,
}) {
  return (
    <div className="flex flex-col bg-white relative rounded-[14px] w-full min-[600px]:w-1/2 h-[530px]">
      <div className="flex relative flex-col h-fit items-start gap-[22px] top-[52.25px] w-[70%] left-[30px] md:left-[52px] text-black ">
        <h2 className="text-[24px] min-[700px]:text-[32px] font-stemBold min-[700px]:w-2/3 tracking-[-1%] leading-[93%]">
          {title}
        </h2>
        <p className="tracking-[-1%] font-stemRegular leading-[143%]">
          {description}
        </p>
        <a
          href={url}
          className="flex cursor-pointer gap-4 text-blue-600 leading-[143%] max-md:pr-5"
        >
          <div className="text-brandBlue font-stemRegular leading-[143%] tracking-[-1%]">
            {ctaText}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65b4799228ec6667a9c819947537c709980807fa97cc01435b34926214bc560?"
            className="w-[24px] h-[24px]"
          />
        </a>
      </div>
      <div className={`absolute bottom-0 right-0 w-2/3 h-full object-contain`}>
        <img
          src={image}
          alt={imageAlt}
          width={width}
          height={height}
          className=" w-fit absolute bottom-0 right-0 h-fit object-cover"
        />
      </div>
    </div>
  );
}

SocialCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default function Stream() {
  const socialData = [
    {
      title: "Join us on Youtube",
      // description: "Who we are Who we areWho we areWho we areWho we are",
      ctaText: "Watch now",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/423b62941b7e49c6b3dabc897366c95339d4b6aec77b40a291538411c2cf7e56?apiKey=873e47fe7796454e93671642132d9742&",
      imageAlt: "Youtube social card image",
      url: "https://www.youtube.com/@flourishgc_global",
      width: "357",
      height: "286",
    },
    {
      title: "Join us on Mixlr",
      // description: "Who we are Who we areWho we areWho we areWho we are",
      ctaText: "Join us now",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/227424a92863363e9df6b903893496e228a7aab26f9f60eee76656220b93556a?apiKey=873e47fe7796454e93671642132d9742&",
      imageAlt: "Mixlr social card image",
      width: "349",
      height: "349",
    },
    {
      title: "Join us on Facebook",
      // description: "Who we are Who we areWho we areWho we areWho we are",
      ctaText: "Join us now",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a1c0d4cbada0dc78c2add89bb4f0e25c71a3d4cefee753159232a76d3d228efe?apiKey=873e47fe7796454e93671642132d9742&",
      imageAlt: "Facebook social card image",
      url: "https://web.facebook.com/flourishnationglobal",
      width: "345",
      height: "345",
    },
  ];

  return (
    <section className="p-[20px] flex flex-col gap-[78px] md:p-[80px] xl:p-[150px] ">
      <div className="flex flex-col gap-[16px] lg:w-[889px]">
        <div className="justify-center flex flex-col items-center py-[18.88px] tracking-[1%] w-fit leading-[93%] whitespace-nowrap bg-[#E3FFF2] rounded-[65.48px] px-[33.31px]">
          <p className="font-stemBold text-greenSecondary text-sm">
            {" "}
            Join us Live{" "}
          </p>
        </div>
        <p className="md:text-[78.28px] font-dmserif tracking-[-2.5%] leading-[98%] text-6xl">
          Streaming Platforms
        </p>
        <p className="font-stemRegular tracking-[-1%] leading-[143%]">
          We at the Flourish Generation Church believe that the word of God and
          prayer are essential in the growth of a solid believer .
        </p>
      </div>
      <div className="flex gap-5 flex-col min-[600px]:flex-row ">
        {socialData.map((card, index) => (
          <SocialCard
            key={index}
            title={card.title}
            description={card.description}
            ctaText={card.ctaText}
            image={card.image}
            imageAlt={card.imageAlt}
            width={card.width}
            height={card.height}
          />
        ))}
      </div>
    </section>
  );
}

import PropTypes from "prop-types";
export default function FlourishingCard({
  title1,
  title2,
  title3,
  className,
  description,
  imageUrl,
  alt,
  marginLeft,
  order,
  borderLine,
  imagePosition,
  textColor,
}) {
  return (
    <section className="my-20 flex justify-center relative">
      <div className={` bg-white relative ${borderLine} rounded-[32px] `}>
        <div
          className={`${marginLeft} py-[35px] flex justify-between gap-[71px]`}
        >
          <div
            className={`flex ${order}  flex-col gap-[14px] self-stretch my-auto w-1/2 `}
          >
            <h1 className="text-[64px] font-dmserif tracking-[-2.5%]  leading-[95%] max-md:text-4xl">
              {title1} <span className={textColor}>{title2}</span> {title3}
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className={`${className}`}
            ></p>
          </div>
          <div className={`w-1/2 ${imagePosition} `}>
            <img
              loading="lazy"
              src={imageUrl}
              alt={alt}
              className={`w-[488px] h-[572px] rounded-[21px] object-cover `}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

FlourishingCard.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  marginLeft: PropTypes.string,
  order: PropTypes.string,
  borderLine: PropTypes.string,
  imagePosition: PropTypes.string,
  circleColor: PropTypes.string,
};

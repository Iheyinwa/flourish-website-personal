import PropTypes from "prop-types";
import locationicon from "../assets/icons/location.png";
import nigeriaIcon from "../assets/icons/9ja.png";
function CountryTag({ text, icon, className, textColor }) {
  return (
    <div
      className={`${className} inline-flex justify-center items-center rounded-[58.1px] py-[15.38px] gap-[8.54px] px-[28.2px]`}
    >
      <p
        className={`${textColor} font-stemBold text-[17.09px] leading-[98%] tracking-[-2.5%]`}
      >
        {text}
      </p>
      {icon && <img src={icon} className="w-[23.92px] h-[23.92px]" />}
    </div>
  );
}

CountryTag.propTypes = {
  text: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  textColor: PropTypes.string,
};

const Location = () => {
  return (
    <section className="bg-brandBlue flex justify-start items-center md:h-[786.91px] px-[20px] lg:px-[40px] xl:px-[150px] py-[118px]">
      <section className="flex flex-col gap-[32px] w-full">
        <div className="flex justify-between gap-[23px] items-center">
          <CountryTag
            className={`border-[1.71px] border-white`}
            textColor={"text-white"}
            text="All"
          />
          <CountryTag
            className={`bg-white`}
            textColor={"text-brandBlue"}
            text="Nigeria"
            icon={nigeriaIcon}
          />
        </div>
        <div className="bg-cardBlue py-[20px] md:py-[92px] px-[20px] md:px-[99px] rounded-[22px] flex flex-col gap-[20px]">
          <div className="bg-iconBlue w-[61.22px] h-[61.22px] flex justify-center items-center rounded-[10px]">
            <img src={locationicon} />
          </div>
          <h1 className="text-white font-stemBold text-[30px] md:text-[42px] leading-[98%] tracking-[-1%]">
            Flourish Generation Church, Enugu
          </h1>
          <a
            href="https://maps.app.goo.gl/gs7deNniRgcREiRa7"
            className="font-redhat text-[25px] md:text-[36px] text-white leading-[143%] tracking-[-1%]"
          >
            Mater Purisima Event Centre, 187 Ogui Road, Just Opposite 4 Market
            Days Supermarket, China Town, Enugu, Enugu State
          </a>
        </div>
      </section>
    </section>
  );
};

export default Location;

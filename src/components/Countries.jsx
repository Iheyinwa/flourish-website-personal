import PropTypes from "prop-types";

const countries = [
  { name: "All" },
  {
    name: "Nigeria",
    flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e7bab948f99caa217454b8e9171b462b255e443d3481bf3aa8585c7c15437d1?apiKey=873e47fe7796454e93671642132d9742&",
  },
  // {
  //   name: "UK",
  //   flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/318ae4d41824b7df13314f90b86d2568aa2bfbe5892b199ae7216f643a9beaa3?apiKey=873e47fe7796454e93671642132d9742&",
  // },
  // {
  //   name: "Russia",
  //   flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b780cca1d139a6c78425a2dcebf427537af4f76592f87aac24f5f6414c81b13?apiKey=873e47fe7796454e93671642132d9742&",
  // },
  // {
  //   name: "Kenya",
  //   flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/e57e5416be995bc9709b2bbc435d77278157f03c8f00317ef40ef28730f2ce11?apiKey=873e47fe7796454e93671642132d9742&",
  // },
  // {
  //   name: "USA",
  //   flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/1446367e07ff775a98456a8e436afb12085a9891e2c2196be04f63fa26f10578?apiKey=873e47fe7796454e93671642132d9742&",
  // },
];
const churches = [
  {
    name: "Flourish Church Enugu",
    address:
      "Mater Purisima Event Centre, 187 Ogui Road, Just Opposite 4 Market Days Supermarket, China Town, Enugu, Enugu State",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1bd85b5066a46c020786ecbc67286539f9ba08ccfb8b31a79fc9fd8af64ac44?apiKey=873e47fe7796454e93671642132d9742&",
  },
  // {
  //   name: "Flourish Church Enugu",
  //   address:
  //     "Mater Purisima Event Centre, 187 Ogui Road, Just Opposite 4 Market Days Supermarket, China Town, Enugu, Enugu State",
  //   icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1bd85b5066a46c020786ecbc67286539f9ba08ccfb8b31a79fc9fd8af64ac44?apiKey=873e47fe7796454e93671642132d9742&",
  // },
  // {
  //   name: "Flourish Church Enugu",
  //   address:
  //     "Mater Purisima Event Centre, 187 Ogui Road, Just Opposite 4 Market Days Supermarket, China Town, Enugu, Enugu State",
  //   icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c791e4d672544ceb89ef236b706c1a12489093b4a7ed9875923a31d7084cb4f?apiKey=873e47fe7796454e93671642132d9742&",
  // },
  // {
  //   name: "Flourish Church Enugu",
  //   address:
  //     "Mater Purisima Event Centre, 187 Ogui Road, Just Opposite 4 Market Days Supermarket, China Town, Enugu, Enugu State",
  //   icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c791e4d672544ceb89ef236b706c1a12489093b4a7ed9875923a31d7084cb4f?apiKey=873e47fe7796454e93671642132d9742&",
  // },
  // {
  //   name: "Flourish Church Enugu",
  //   address:
  //     "Mater Purisima Event Centre, 187 Ogui Road, Just Opposite 4 Market Days Supermarket, China Town, Enugu, Enugu State",
  //   icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c791e4d672544ceb89ef236b706c1a12489093b4a7ed9875923a31d7084cb4f?apiKey=873e47fe7796454e93671642132d9742&",
  // },
  // {
  //   name: "Flourish Church Enugu",
  //   address:
  //     "Mater Purisima Event Centre, 187 Ogui Road, Just Opposite 4 Market Days Supermarket, China Town, Enugu, Enugu State",
  //   icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c791e4d672544ceb89ef236b706c1a12489093b4a7ed9875923a31d7084cb4f?apiKey=873e47fe7796454e93671642132d9742&",
  // },
];
const CountryButton = ({ name, flag, isActive }) => (
  <div
    className={`flex gap-[8.54px] items-center justify-between px-[28.2px] py-[15.38px] ${
      isActive
        ? "text-brandBlue bg-white"
        : "border-2 border-white text-white border-solid"
    } rounded-[58.101px] font-stemBold text-[17.04px] tracking-[-2.5%] leading-[108%] max-md:px-5`}
  >
    {" "}
    <p>{name}</p>
    {flag && (
      <img
        loading="lazy"
        src={flag}
        alt={`${name} flag`}
        className="shrink-0 w-6 aspect-square"
      />
    )}{" "}
  </div>
);

CountryButton.propTypes = {
  name: PropTypes.string,
  flag: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

const ChurchCard = ({ name, address, icon }) => (
  <div className="flex flex-col px-[46px] py-10 w-full text-white bg-cardBlue rounded-2xl gap-[20px] h-full">
    {" "}
    <img loading="lazy" src={icon} alt="" className="w-8 aspect-square" />{" "}
    <h3 className="text-[24.65px] tracking-[-1%] leading-[98%] font-stemBold">
      {name}
    </h3>{" "}
    <p className="tracking-[-1%] leading-[143%] font-redhat">{address}</p>{" "}
  </div>
);

ChurchCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default function Countries() {
  return (
    <section className="flex justify-center items-center px-[20px] lg:px-[40px] xl:px-[150px] py-[150px] ">
      <div className="flex flex-col items-center justify-center w-full gap-[50px] p-[20px] min-[600px]:p-[45px] md:px-[40px] md:py-[100px] bg-brandBlue rounded-[25px]">
        <div className="flex flex-wrap items-center gap-[8px] md:gap-[15px] lg:gap-[23px] justify-between w-full ">
          {countries.map((country, index) => (
            <CountryButton
              key={index}
              name={country.name}
              flag={country.flag}
              isActive={country.name === "Nigeria"}
            />
          ))}
        </div>
        <div className=" grid grid-cols-1 gap-[22px] lg:grid-cols-1 w-full">
          {churches.map((church, i) => (
            <div key={i}>
              <ChurchCard
                name={church.name}
                address={church.address}
                icon={church.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

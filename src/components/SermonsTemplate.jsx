import { HeadPhoneIcon } from "../svg/svg";
import PropTypes from "prop-types";
// import download from "../assets/icons/download.png";
import { sermons } from "../constants/data";

// function SearchButton() {
//   return (
//     <div className=" w-full">
//       <div
//         className="
//           flex items-center gap-[10px]
//           md:w-[551px] h-[78px]
//           rounded-[11px]
//           border-[1.5px] border-[#d1d1d1]
//           px-[30px] md:px-[36px] py-[20px] md:py-[26px]
//           bg-white opacity-100
//         "
//       >
//         <input
//           name="search"
//           type="text"
//           placeholder="Search..."
//           className="
//             flex-1 text-[20px] placeholder:text-black font-stemRegular leading-[143%] tracking-[-1%] outline-none bg-transparent
//           "
//         />
//         <SearchIcon />
//       </div>
//     </div>
//   );
// }

function CardTemplate({ img, title, audioLink }) {
  return (
    <div className="flex bg-white flex-col gap-[26px] rounded-[20px] pt-[12px] pb-[29px] px-[12px] w-full">
      <div className="w-full md:h-[396px]">
        <img
          loading="lazy"
          src={img}
          alt={`${title} flier`}
          className="w-full h-full rounded-[14.93px]"
        />
      </div>
      <div className="p-[10px] md:p-[20px] flex flex-col gap-[20px]">
        <h1 className="text-lg md:text-[24px] tracking-[-1%] leading-[93%] font-stemBold">
          {title}
        </h1>
        <div className="inline-flex gap-[5.69px] items-center">
          <a
            href={audioLink}
            className="border-[0.7px] w-[46.16px] h-[29.37px] rounded-[23.08px] py-[6.29px] px-[8.39px] flex items-center justify-center hover:bg-lightBlue hover:border-lightBlue border-brandBlue"
          >
            <HeadPhoneIcon className={`w-[16.78px] h-[16.78px]`} />
          </a>
          {/* <a
            href={downloadLink}
            className="border-[0.7px] w-[46.16px] h-[29.37px] rounded-[23.08px] py-[6.29px] px-[8.39px] hover:bg-lightBlue hover:border-lightBlue flex items-center justify-center border-brandBlue"
          >
            <img
              src={download}
              alt="video icon"
              className="w-[16.78px] h-[16.78px]"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
}

CardTemplate.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  audioLink: PropTypes.string,
  // downloadLink: PropTypes.string,
};

export default function SermonsPage() {
  return (
    <section className="flex px-[20px] lg:px-[40px] xl:px-[150px] pt-[100px] pb-[150px]">
      <div className="flex flex-col gap-[64px] w-full justify-center items-start">
        <div className="flex flex-col gap-[16px] w-[90%] lg:w-[661px] ">
          <p className="md:text-[78.28px] w-full font-dmserif tracking-[-2.5%] leading-[98%] text-6xl">
            Latest Sermons
          </p>
          <p className="font-stemRegular w-full tracking-[-1%] leading-[143%]">
            This word of the Lord shall not depart from your mouth but thou
            shall meditate on it day and night. We have over 150+ messages
            curated to help you grow in fervency, in faith, in wisdom, in
            stature and in the knowledge of God.
          </p>
          {/* <SearchButton /> */}
        </div>
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-[20px] min-[600px]:gap-[30px] md:gap-[40px] justify-between items-center">
          {sermons.map((sermon) => (
            <CardTemplate
              key={sermon.id}
              img={sermon.img}
              title={sermon.title}
              audioLink={sermon.audioLink}
              // downloadLink={sermon.downloadLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

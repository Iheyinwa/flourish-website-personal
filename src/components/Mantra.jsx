import yellowstar from "../assets/icons/yellowStar.png";
export default function Mantra() {
  return (
    <section className="flex justify-center items-center px-[20px] md:px-[80px] xl:px-[150px] h-full ">
      <div className="flex relative z-10 flex-col md:flex-row justify-between items-center w-full bg-white h-[531px] rounded-[28px] border-4 border-white border-solid pl-[20px] min-[1330px]:pl-[150px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/27628be1602de2183a128fcabbae8c10bc55285c875088c310bc036c4ed50adb?"
          className="absolute top-[22px] left-0 w-fit h-fit"
        />
        <div className="flex md:justify-center xl:justify-between py-[40px] gap-[20px] w-full h-full xl:w-fit xl:h-fit items-center min-[1100px]:flex-row flex-col">
          <p className="lg:text-[78px] font-dmserif text-brandBlue tracking-[-2.5%] leading-[98%] text-[50px] md:text-6xl xl:w-1/3">
            His Mantra
          </p>
          <div className="relative w-[90%] h-full lg:w-fit lg:h-fit">
            <div className="relative top-0 bg-[#F9D000] w-full h-full lg:w-[604px] lg:h-[366px] border-4 rotate-[-3.5deg] border-white rounded-[14px]"></div>
            <div className=" absolute -top-3 left-2 flex border-5 border-white justify-center items-center bg-brandBlue rounded-[27px] rotate-[0.98deg] lg:w-[588px] lg:h-[391px] w-full h-full">
              <p className="font-redhat font-extrabold text-[26px]  md:text-[36px] lg:text-[48px] leading-[93%] tracking-[-1%] w-[80%] text-white">
                Follow Jesus and Damn the Consequences !!!!
              </p>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src={yellowstar}
          className="absolute right-0 top-0 lg:top-1/4 w-fit h-fit"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/179c1eb4547db6988affa162d3391e074221b12a3bd4a4089dad788fc24740d8?"
          className="bottom-0 left-1/2 absolute"
        />
      </div>
    </section>
  );
}

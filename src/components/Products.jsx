export default function Products() {
  return (
    <div className="flex justify-center items-center p-[20px] md:p-[80px] xl:p-[150px] w-full  max-md:max-w-full">
      <div className="flex flex-col gap-[36px]  w-full max-w-[1138px] max-md:max-w-full">
        <div className="flex flex-col gap-[32px] lg:w-[889px]">
          <div className="justify-center flex flex-col items-center py-[18.88px] tracking-[1%] w-fit leading-[93%] whitespace-nowrap bg-[#E3FFF2] rounded-[65.48px] px-[33.31px]">
            <p className="font-stemBold text-greenSecondary text-sm">
              {" "}
              The Church with Eternity in view{" "}
            </p>
          </div>
          <div className=" md:text-[78.28px] font-dmserif tracking-[-2.5%] leading-[98%] max-md:max-w-full text-[49px]">
            His Products and Intellectual Properties
          </div>
          {/* <div className="font-stem tracking-[-1%] leading-[143%] text-black ">
            Who we are Who we areWho we areWho we areWho we areWho we areWho we
            areWho we areWho we areWho we areWho we areWho we areWho we areWho
            we areWho we areWho we areWho we areWho we areWho we areWho we are
          </div> */}
        </div>
        <div className="flex gap-[32px] flex-col flex-wrap md:flex-row md:flex-nowrap">
          <div className="flex w-full justify-center items-center px-[65px] py-[64px] bg-white rounded-[14px]">
            <div className="flex flex-col gap-[14px] self-end h-full">
              <p className="text-4xl md:text-[40px] tracking-[-2.5%] leading-[98%] font-dmserif text-black">
                His <br /> Books
              </p>
              <a className="flex cursor-pointer items-end w-full h-full gap-4 text-brandBlue">
                <p className="text-brandBlue font-stem leading-[143%] tracking-[-1%]">
                  Coming Soon
                </p>
                {/* <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65b4799228ec6667a9c819947537c709980807fa97cc01435b34926214bc560?"
                  className="w-[24px] h-[24px]"
                /> */}
              </a>
            </div>
          </div>
          <div className="flex w-full justify-center items-center px-[65px] py-[64px] bg-white rounded-[14px]">
            <div className="flex flex-col gap-[14px] h-full">
              <p className="text-4xl md:text-[40px] tracking-[-2.5%] leading-[98%] font-dmserif text-black">
                Daily <br /> Devotionals
              </p>
              <a className="flex cursor-pointer  w-full items-end h-full gap-4 text-brandBlue">
                <p className="text-brandBlue font-stem leading-[143%] tracking-[-1%]">
                  Coming Soon
                </p>
                {/* <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65b4799228ec6667a9c819947537c709980807fa97cc01435b34926214bc560?"
                  className="w-[24px] h-[24px]"
                /> */}
              </a>
            </div>
          </div>
          <div className="flex w-full justify-center items-center px-[65px] py-[64px] bg-white rounded-[14px]">
            <div className="flex flex-col gap-[14px] h-full">
              <p className="text-4xl md:text-[40px] tracking-[-2.5%] leading-[98%] font-dmserif text-black">
                His Sermons
              </p>
              <a
                href="https://t.me/FlourishNation"
                className="flex w-full cursor-pointer items-end  h-full gap-4 text-brandBlue"
              >
                <p className="text-brandBlue font-stem leading-[143%] tracking-[-1%]">
                  Check them out
                </p>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65b4799228ec6667a9c819947537c709980807fa97cc01435b34926214bc560?"
                  className="w-[24px] h-[24px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

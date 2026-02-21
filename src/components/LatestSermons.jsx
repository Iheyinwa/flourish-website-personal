import SermonsPage from "./SermonsTemplate";

export default function LatestSermons() {
  return (
    <>
      <section className="flex px-[20px] lg:px-[40px] lg:p-[54px] justify-center items-center h-screen">
        <div className="relative flex flex-col justify-end pb-[20px] xl:pb-0 min-[768px]:justify-center w-full h-screen bg-sermons-hero bg-cover bg-top bg-no-repeat rounded-[24px] ">
          <div className="absolute left-[20px] lg:left-[40px] xl:left-[110px] flex flex-col justify-start gap-[18px] w-[90%] md:w-[70%] xl:w-[50%]">
            <div className="justify-center flex flex-col items-center py-[18.88px] text-sm font-extrabold tracking-[1%] w-fit leading-[93%] text-brandBlue whitespace-nowrap bg-lightBlue font-redhat rounded-[65.48px] px-[33.31px]">
              <p> Don&apos;t miss out </p>
            </div>
            <h1 className="text-6xl md:text-[78.28px] leading-[95%] tracking-[-2.5%] text-white font-dmserif">
              Over 150+ Sermons curated for your growth in the Spirit
            </h1>
            {/* <p className="hiddfont-stemRegular text-white tracking-[-1%] leading-[143%] ">
              Who we are Who we are Who we are Who we areWho we areWho we are
              Who we are Who we areWho we are Who we areWho we areWho we are
            </p> */}
          </div>
        </div>
      </section>

      <section>
        <SermonsPage />
      </section>
    </>
  );
}

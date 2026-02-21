import Button from "./UI/Button";

export default function Trainings() {
  return (
    <section className="flex justify-center items-center py-[100px] min-[500px]:px-[20px] px-[20px] xl:pl-[150px] bg-white/20 ">
      <div className="flex min-[825px]:flex-row justify-between gap-[100px] min-[1155px]:gap-[171px] flex-col h-full ">
        <div className="flex flex-col gap-[32px] justify-center min-[825px]:w-[40%] xl:w-[30%]">
          <div className="flex flex-col gap-[16px]">
            <div className=" bg-white w-[137.62px] font-bold px-[33.31px] py-[18.88px] text-sm tracking-normal text-brandBlue rounded-[65.48px]">
              Our Vision
            </div>
            <div>
              <h1 className="text-[60px] leading-[98%] tracking-[-2.5%] text-black font-dmserif  w-full max-md:text-4xl ">
                We envision a <span className="text-brandBlue">Generation</span>{" "}
                living out the life of Christ
              </h1>
            </div>
            <p className="tracking-[-1%] leading-[143%] text-black  w-full font-stemRegular">
              We are on a mission to <strong>make all men see, know</strong> and
              <strong> reflect Christ to our Generation.</strong>
            </p>
          </div>
          <Button
            route="/whoweare"
            className="text-white font-bold whitespace-nowrap bg-brandBlue hover:bg-lightBlue hover:text-brandBlue font-redhat py-[16px] px-[42px] text-[18.1px] leading-[93%] tracking-[1%]"
          >
            About us
          </Button>
        </div>
        <div className="flex flex-col min-[825px]:w-[40%] mr-5 min-[825px]:mx-5 xl:w-[60%]">
          <div className="xl:ml-20  min-[825px]:bg-white h-full rounded-[13px] flex justify-start items-center min-[825px]:py-10">
            <div className="flex w-full gap-8 max-md:flex-col">
              <div className="flex flex-col min-[825px]:-ml-28 xl:-ml-32 ">
                <div className="flex flex-col w-full min-[825px]:w-[200px] min-[825px]:h-[300px] min-[1280px]:w-[313.08px] min-[1280px]:h-[495.62px] rounded-2xl">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/699b52b171cc53fa35fd45504c9a5126c6a8f4cdc67118e4d859f309988fb1bd?apiKey=873e47fe7796454e93671642132d9742&"
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              <div className="flex flex-col min-[1280px]:pr-8">
                <div className="flex flex-col w-full justify-center items-center  my-auto rounded-2xl min-[825px]:w-[200px] min-[825px]:h-[300px] min-[1280px]:w-[313.08px] min-[1280px]:h-[495.62px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5932a3d2785828c62b43b2f4d458ce8fe514ad439df6dd7fe88d615fa8483656?apiKey=873e47fe7796454e93671642132d9742&"
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <img
            src={trainings}
            width={817}
            height={633}
            className="w-full object-contain h-full"
          /> */}
        </div>
      </div>
    </section>
  );
}

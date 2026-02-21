import Button from "./UI/Button";

export default function Statement() {
  return (
    <main className="flex justify-between items-center min-[500px]:px-[20px] px-[20px] xl:px-[150px] py-[100px] bg-white">
      <article className="flex gap-5 max-md:flex-col justify-between md:gap-[98px]">
        <div className="flex flex-col md:w-[50%]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3eaf8a7f25a3fa28bf3628f9a6dc5df301029f3d09b9118d13a3925bc25f29b?apiKey=873e47fe7796454e93671642132d9742&"
            alt="Statement of Faith"
            className="grow w-full aspect-[0.9] rounded-3xl max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col gap-[32px] justify-center md:w-[38%]">
          <div className="flex flex-col gap-[16px] text-black">
            <h1 className="text-[60px] leading-[98%] tracking-[-2.5%] text-black font-dmserif  w-full max-md:text-4xl ">
              Statement of Faith
            </h1>
            {/* WRITTEN STATEMENT */}
            <div className="font-redhat tracking-[-1%] leading-[143%]">
              <p>
                We flourish on every side because God said to us &quot;Flourish!
                &quot;.
              </p>
              <p>
                We are a city set on a hill that cannot be hid, our leaves do
                not wither and everything we do prospers.
              </p>
            </div>
            <div className="font-redhat tracking-[-1%] leading-[143%]">
              <p>
                We are like trees planted by the rivers of water, that brings
                forth fruit in due season, because we are a Flourishing Nation!
              </p>
            </div>
          </div>
          <Button
            route="/whoweare"
            className="text-white font-bold whitespace-nowrap bg-brandBlue hover:bg-lightBlue hover:text-brandBlue font-redhat py-[16px] px-[42px] text-[18.1px] leading-[93%] tracking-[1%]"
          >
            About us
          </Button>
        </div>
      </article>
    </main>
  );
}

import pace2 from "../assets/images/aboutpace2.png";
export default function Apace() {
  return (
    <div className="flex justify-center items-center px-[20px] md:px-[80px] xl:px-[150px] py-20 w-full  max-md:max-w-full">
      <div className=" w-full max-w-[1112px] max-md:my-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={pace2}
              alt="Pastor Ama Chinecherem Ebenezer"
              className=" w-full h-full aspect-[0.9] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow self-stretch text-black gap-[32px] max-md:max-w-full">
              <div className="justify-center flex flex-col items-center py-[18.88px] tracking-[1%] w-fit leading-[93%] whitespace-nowrap bg-[#E3FFF2] rounded-[65.48px] px-[33.31px]">
                <p className="font-stemBold text-greenSecondary text-sm">
                  {" "}
                  The Church with Eternity in view{" "}
                </p>
              </div>
              <div className=" md:text-[78.28px] font-dmserif tracking-[-2.5%] leading-[98%] max-md:max-w-full text-[49px]">
                About PACE
              </div>
              <div className=" tracking-[-1%] font-stem leading-[143% max-md:max-w-full">
                Pastor Ama Chinecherem Ebenezer is the lead steward of the
                Flourish Generation Church.
                <br />
                With a deep and sincere desire to see more people come into the
                fullness of the knowledge of Christ, He is committed to his
                assignment, separating and preserving a generation into God in
                righteousness through his ministry of deep teaching, sounds and
                deliverance.
                <br />
                <br />
                His desire is to see a generation effectively living out the
                Life of Christ in them; built and equipped to walk in their
                God-given purpose.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

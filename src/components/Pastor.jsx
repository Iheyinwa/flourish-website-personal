import Button from "./UI/Button";
import PastorImage from "../assets/images/pace-pattern.png";

export default function Pastor() {
  return (
    <>
      <section className="hidden bg-pace-pattern [@media(min-width:500px)]:flex justify-start items-center bg-no-repeat bg-cover xl:bg-cover h-[500px] md:h-[600px] xl:h-[800px]">
        <div className="flex flex-col gap-[10px] md:gap-[32px] justify-center relative w-[75%] left-[20px] lg:left-[40px] xl:left-[150px] md:w-[366px]">
          <div className="flex flex-col gap-[16px] text-white">
            <h1 className="hidden md:block text-[78.28px] leading-[98%] tracking-[-2.5%] text-white font-dmserif  w-full">
              Meet Our <br /> Pastor
            </h1>
            <h1 className="md:hidden leading-[98%] tracking-[-2.5%] text-white font-dmserif  w-full text-3xl ">
              Meet Our Pastor
            </h1>
            {/* WRITTEN STATEMENT */}
            <p className="font-redhat tracking-[-1%] leading-[143%] md:text-[18px]">
              Pastor Ama Chinecherem Ebenezer (PACE) is the Lead Pastor and
              Founder of the Flourish Generation Church where he lives out and
              expresses his profound passion of seeing that a generation is
              separated and preserved unto God, effectively living out the Life
              of Christ in them; built and equipped to walk in their God-given
              purpose.
            </p>
          </div>
          <Button
            route="/whoweare"
            className="text-black font-extrabold whitespace-nowrap bg-white hover:bg-brandBlue/10 font-redhat py-[16px] px-[42px] text-[18.61px] leading-[93%] tracking-[1%]"
          >
            About our Pastor
          </Button>
        </div>
      </section>
      <section className="[@media(min-width:500px)]:hidden bg-white flex flex-col md:flex-row justify-between h-full gap-10 items-center">
        <div className="flex flex-col gap-[10px] md:gap-[32px] justify-center relative px-[30px] w-full min-[500px]:w-[75%] md:px-0 md:left-[80px] xl:left-[138px] md:w-[366px]">
          <div className="flex flex-col gap-[16px] text-black">
            <h1 className="hidden md:block text-[78.28px] leading-[98%] tracking-[-2.5%] text-black font-dmserif  w-full">
              Meet Our <br /> Pastor
            </h1>
            <h1 className="md:hidden leading-[98%] tracking-[-2.5%] text-black font-dmserif  w-full text-3xl ">
              Meet Our Pastor
            </h1>
            {/* WRITTEN STATEMENT */}
            <p className="font-redhat tracking-[-1%] leading-[143%] md:text-[18px]">
              Pastor Ama Chinecherem Ebenezer (PACE) is the Lead Pastor and
              Founder of Flourish Nation Global where he lives out and expresses
              his profound passion of seeing that a generation is separated and
              preserved unto God, effectively living out the Life of Christ in
              them; built and equipped to walk in their God-given purpose.
            </p>
          </div>
          <Button
            route="/whoweare"
            className="text-white font-extrabold whitespace-nowrap bg-brandBlue hover:bg-brandBlue/10 font-redhat py-[16px] px-[42px] text-[18.61px] leading-[93%] tracking-[1%]"
          >
            About our Pastor
          </Button>
        </div>
        <div className="min-[500px]:w-1/2">
          <img
            src={PastorImage}
            height={500}
            className=" w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}

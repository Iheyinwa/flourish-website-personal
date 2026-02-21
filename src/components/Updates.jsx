import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function Updates() {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
  });

  const form = useRef();

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nrk7s92",
        "template_dyir07s",
        form.current,
        "0s53L4eElJ69fTRXv"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      )
      .then(() => {
        setMailerState({
          email: "",
          name: "",
        });
      });
  };

  return (
    <section className="flex justify-center items-center w-full px-32 pt-10  max-md:px-5 bg-slate-200">
      <div className="flex justify-center w-full flex-col items-start self-center pt-1 pr-20 pb-20 mb-16  bg-blue-600 rounded-3xl border-4 border-white border-solid max-w-[1148px] max-md:pr-5  max-md:max-w-full">
        <div className="flex gap-5 justify-between max-w-full w-[668px] max-md:flex-wrap max-md:pr-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b19fcc235ca1d4a1a5c8af1a59c73373b4ee22127913624b617d54bb18d456f8?"
            className="shrink-0 border-white border-solid aspect-[1.05] border-[5px] fill-emerald-500 stroke-[4.568px] stroke-white w-[42px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d073bd01ecbe8bc6365908ce0150a2e1600e236e7d4611c6288a3764a629978?"
            className="shrink-0 self-start border-white border-solid aspect-[5.56] border-[5px] fill-yellow-400 stroke-[5px] stroke-white w-[84px]"
          />
        </div>
        <div className="mt-20 ml-20 text-6xl font-kuano tracking-tighter text-white  leading-[63px] max-md:px-5 max-md:ml-2.5  max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          To get update on upcoming events and sermons{" "}
        </div>
        <p className="mt-6 ml-20 text-base w-3/5 tracking-normal leading-6 text-white font-serif max-md:px-5 max-md:ml-2.5 max-md:max-w-full">
          We promise not to SPAM you, but send you edifying and amazing content
          regularly from Flourish Nation Global
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <input
            className="justify-center py-7 pr-5 pl-12 mt-6 w-4/5 ml-20 text-lg font-serif font-medium tracking-tighter leading-5 text-white border border-white border-solid bg-black bg-opacity-10 rounded-[141px] max-md:px-5 max-md:ml-2.5 max-md:w-full h-10 max-md:pl-5 max-md:max-w-full"
            id="name"
            name="name"
            value={mailerState.name}
            onChange={handleStateChange}
            type="text"
            placeholder="Full Name "
          />

          <input
            className="justify-center py-7 pr-5 pl-12 mt-6 w-4/5 ml-20 text-lg font-serif font-medium tracking-tighter leading-5 text-white border border-white border-solid bg-black bg-opacity-10 rounded-[141px] max-md:px-5 max-md:ml-2.5 max-md:w-full h-10 max-md:pl-5 max-md:max-w-full"
            id="email"
            name="email"
            value={mailerState.email}
            onChange={handleStateChange}
            type="text"
            placeholder="Email"
          />

          <button
            className="justify-center px-11 py-4 mt-6 mb-5 ml-20 text-xl hover:bg-transparent tracking-normal leading-4 font-serif text-white whitespace-nowrap bg-emerald-500 rounded-[58.975px] max-md:px-5 max-md:ml-2.5"
            onSubmit={sendEmail}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

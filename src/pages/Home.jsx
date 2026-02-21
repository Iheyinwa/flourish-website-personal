import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Flourish from "../components/Flourish";
import WhatsComing from "../components/WhatsComing";
import Trainings from "../components/Trainings";
import Statement from "../components/Statement";
import Pastor from "../components/Pastor";
import Location from "../components/Location";
import Invest from "../components/Invest";
import line from "../assets/icons/linehero.png";

export default function Home() {
  return (
    <section>
      <div className="absolute top-0 right-0">
        <img src={line} alt="star" className="w-fit h-fit" />
      </div>
      <Layout>
        <Navbar />
        <Flourish />
        <WhatsComing />
        <Trainings />
        <Statement />
        <Pastor />
        <Invest />
        <Location />
      </Layout>
    </section>
  );
}

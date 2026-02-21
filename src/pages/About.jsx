import Layout from "../components/Layout";
import Approach from "../components/Approach";
import Flourishing from "../components/Flourishing";
import WeFlourish from "../components/WeFlourish";
import MyExperience from "../components/MyExperience";
import line from "../assets/icons/aboutLine.png";

export default function About() {
  return (
    <section>
      <div className="absolute top-30 right-0">
        <img src={line} alt="line" className="w-fit h-fit" />
      </div>
      <Layout>
        <WeFlourish />
        <Flourishing />
        <MyExperience
          bgColor={"bg-brandBlue"}
          cardColor={"bg-cardBlue"}
          textColor={"text-white"}
          inactiveArrow={"bg-[#FFE3A8]"}
          activeArrow={"bg-[#F9D000]"}
        />
        <Approach />
      </Layout>
    </section>
  );
}

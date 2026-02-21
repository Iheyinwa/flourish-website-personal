import Layout from "../components/Layout";
import Stream from "../components/Stream";
import LivePst from "../components/LivePst";
import MyExperience from "../components/MyExperience";
import Location from "../components/Location";

export default function Live() {
  return (
    <Layout>
      <LivePst />
      <Stream />
      <Location />
      <MyExperience
        bgColor={""}
        cardColor={"bg-white"}
        textColor={"text-black"}
        inactiveArrow={"bg-[#C3C3C3]"}
        activeArrow={"bg-black"}
      />
    </Layout>
  );
}

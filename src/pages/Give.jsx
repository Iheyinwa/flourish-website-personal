import Layout from "../components/Layout";
import Paystack from "../components/Paystack";
import MyExperience from "../components/MyExperience";
import Paysection from "../components/Paysection";
import Navbar from "../components/Navbar";

export default function Give() {
  return (
    <Layout>
      <Navbar />
      <Paysection />
      <Paystack />
      <MyExperience
        bgColor={"bg-brandBlue"}
        cardColor={"bg-cardBlue"}
        textColor={"text-white"}
        inactiveArrow={"bg-[#FFE3A8]"}
        activeArrow={"bg-[#F9D000]"}
      />
    </Layout>
  );
}

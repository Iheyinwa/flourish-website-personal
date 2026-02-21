import Layout from "../components/Layout";
import Apace from "../components/Apace";
import Achiements from "../components/Achiements";
import Products from "../components/Products";
import Mantra from "../components/Mantra";
import Social from "../components/Social";
import PstAma from "../components/PstAma";
import Navbar from "../components/Navbar";
PstAma;

export default function Pace() {
  return (
    <Layout>
      <Navbar />
      <PstAma />
      <Apace />
      <Achiements />
      <Products />
      <Mantra />
      <Social />
    </Layout>
  );
}

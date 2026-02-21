import Layout from "../components/Layout";
import LatestSermons from "../components/LatestSermons";
import Navbar from "../components/Navbar";

export default function Sermons() {
  return (
    <Layout>
      <Navbar />
      <LatestSermons />
    </Layout>
  );
}

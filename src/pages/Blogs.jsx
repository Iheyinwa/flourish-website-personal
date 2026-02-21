import Layout from "../components/Layout";
import BlogsSection from "../components/BlogsSection";
import BlogsTop from "../components/BlogsTop";
import Navbar from "../components/Navbar";

export default function Blogs() {
  return (
    <Layout>
      <Navbar />
      <BlogsTop />
      <BlogsSection />
    </Layout>
  );
}

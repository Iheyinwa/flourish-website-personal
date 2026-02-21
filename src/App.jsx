import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Oops from "./pages/ErrorPage.jsx";
import Blogs from "./pages/Blogs.jsx";
import Expressions from "./pages/Expressions.jsx";
import Give from "./pages/Give.jsx";
import Pace from "./pages/Pace.jsx";
import Sermons from "./pages/Sermons.jsx";
import Live from "./pages/Live.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="sermons" element={<Sermons />} />
          <Route path="whoweare" element={<About />} />
          <Route path="expressions" element={<Expressions />} />
          <Route path="aboutpace" element={<Pace />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="give" element={<Give />} />
          <Route path="live" element={<Live />} />
          <Route path="*" element={<Oops />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Oops from "./pages/Oops";
import ProjectDetails from "./pages/ProjectDetails";

const App = () => {
  return (
    <>
      <div className="container w-11/12 mx-auto flex flex-col gap-20 sm:w-10/12 md:w-9/12 min-h-screen">
        <HashRouter basename={"/"}>
          <NavBar />
          <ScrollToTop />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/oops" element={<Oops />} />
          </Routes>
        </HashRouter>
      </div>
      <div className="w-full sticky top-[100vh] bg-primary-500/80 mt-12">
        <span className="font-MT text-grayscale-900 text-sm flex justify-center pt-1">
          &copy; Miguel Fierro 2025 | Software & Web Developer
        </span>
      </div>
    </>
  );
};

export default App;

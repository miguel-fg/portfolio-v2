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
            <div className="container w-11/12 mx-auto flex flex-col gap-20 sm:w-10/12 md:w-9/12">
                <HashRouter basename={"/"}>
                    <NavBar />
                    <ScrollToTop />
                    <Routes>
                        <Route index path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/project/:projectId" element={<ProjectDetails /> } />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/oops" element={<Oops />} />
                    </Routes>
                </HashRouter>
            </div>
            <div className="w-full h-4 sticky top-[100vh] bg-sea-green opacity-80 mt-12"></div>
        </>
    );
};

export default App;

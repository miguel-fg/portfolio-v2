import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Oops from "./pages/Oops";

const App = () => {
    return (
        <>
            <div className="container mx-auto w-fit-content grid grid-cols-12 gap-20">
                <HashRouter basename={"/"}>
                    <NavBar />
                    <Routes>
                        <Route index path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
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

import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

import { Link } from "react-router-dom";

import home from "../images/photos/home.jpg";

const Home = () => {
    return (
        <>
            <h1 className="col-start-1 col-span-12 text-h1 font-LS text-oxford-blue mt-10 leading-none">
                Miguel Fierro.
            </h1>
            <h2 className="col-span-4 text-subtitle font-MT text-oxford-blue leading-tight">
                Software & web developer
            </h2>
            <p className="col-span-12 text-body text-oxford-blue font-MT mt-4">
                I make accessible full stack web applications.
            </p>
            <Link
                to="/portfolio"
                className="col-span-3 bg-sea-green text-center px-10 py-2.5 rounded-xl drop-shadow-md text-h3 uppercase font-LS text-alabaster mt-16"
            >
                See my work
            </Link>
            <Link
                to="/contact"
                className="col-span-3 bg-alabaster border-4 border-sea-green text-center px-10 py-2.5 rounded-xl drop-shadow-md text-h3 uppercase font-LS text-oxford-blue mt-16"
            >
                Get in touch
            </Link>
            <Divider />
            <div className="col-span-6">
                <h3 className="text-h3 text-sea-green font-LS uppercase mb-2">
                    About Me
                </h3>
                <h2 className="text-h2 font-LS text-oxford-blue leading-none mb-6">
                    I build web apps that prioritize user needs.
                </h2>
                <p className="text-body font-MT text-oxford-blue mb-20">
                    My personal, professional, and academic journeys have
                    equipped me with the skills and experience to produce high
                    quality work no matter the project requirements.
                </p>
                <Link
                    to="/about"
                    className="grid-inherit col-span-3 col-start-1 bg-sea-green text-center px-20 py-3 rounded-xl drop-shadow-md text-h3 uppercase font-LS text-alabaster"
                >
                    About me
                </Link>
            </div>
            <div className="col-span-6 col-start-7 flex items-center justify-center">
                <img
                    src={home}
                    width="360"
                    alt=""
                    className="rounded-3xl drop-shadow-lg"
                />
            </div>
            <Divider />
            <div className="col-span-6 flex flex-wrap justify-between items-center">
                <div className="w-fit">
                    <img src="/portfolio-v2/thumbnails/cashflow.png" alt="Cash flow project thumbnail" className="max-w-72 rounded-2xl drop-shadow-lg"/>
                </div>
                <div className="w-fit">
                    <img src="/portfolio-v2/thumbnails/opencanvas.png" alt="Open canvas project thumbnail" className="max-w-72 rounded-2xl drop-shadow-lg"/>
                </div>
                <div className="w-fit">
                    <img src="/portfolio-v2/thumbnails/intelliquiz.png" alt="Intelliquiz project thumbnail" className="max-w-72 rounded-2xl drop-shadow-lg"/>
                </div>
                <div className="w-fit">
                    <img src="/portfolio-v2/thumbnails/bitebalance.png" alt="Bitebalance project thumbnail" className="max-w-72 rounded-2xl drop-shadow-lg"/>
                </div>
            </div>
            <div className="col-span-6 col-start-7 ml-6">
                <h3 className="text-h3 text-sea-green font-LS uppercase mb-2">
                    My Work
                </h3>
                <h2 className="text-h2 font-LS text-oxford-blue leading-none mb-6">
                    My sites combine reliability and creativity.
                </h2>
                <p className="text-body font-MT text-oxford-blue mb-20">
                    Using the latest design standards, I ensure the best user
                    experience possible while giving each site an attractice and
                    distinctive identity.
                </p>
                <Link
                    to="/portfolio"
                    className="grid-inherit col-span-3 col-start-1 bg-sea-green text-center px-20 py-3 rounded-xl drop-shadow-md text-h3 uppercase font-LS text-alabaster"
                >
                    Check out my projects
                </Link>
            </div>
            <Divider />
            <ContactForm title="send me a message" />
            <Divider />
            <Footer />
        </>
    );
};

export default Home;

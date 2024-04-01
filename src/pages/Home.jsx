import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

import { Link } from "react-router-dom";

import home from "../images/photos/home.jpg";

const Home = () => {
    return (
        <>
            <h1 className="text-h1 font-LS text-oxford-blue mt-10 leading-none">
                Miguel Fierro.
            </h1>
            <h2 className="text-subtitle font-MT text-oxford-blue leading-tight">
                Software & web developer
            </h2>
            <p className="text-2xl text-oxford-blue font-MT mt-4">
                I make accessible full stack web applications.
            </p>
            <div className="flex flex-col w-9/12 lg:flex-row gap-20">
                <Link
                    to="/portfolio"
                    className="bg-sea-green border-4 border-sea-green text-center px-10 py-2.5 rounded-xl drop-shadow-md text-h3 text-nowrap uppercase font-LS text-alabaster mt-16 active:bg-oxford-blue active:border-oxford-blue focus:outline-none focus:ring-oxford-blue focus:ring-4"
                >
                    See my work
                </Link>
                <Link
                    to="/contact"
                    className="bg-alabaster border-4 border-sea-green text-center px-10 py-2.5 rounded-xl drop-shadow-md text-h3 text-nowrap uppercase font-LS text-oxford-blue mt-0 lg:mt-16 active:bg-oxford-blue active:text-alabaster active:border-oxford-blue focus:outline-none focus:ring-oxford-blue focus:ring-4 focus:border-alabaster"
                >
                    Get in touch
                </Link>
            </div>
            <Divider />
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="lg:col-span-1">
                    <h3 className="text-h3 text-sea-green font-LS uppercase mb-2">
                        About Me
                    </h3>
                    <h2 className="text-h2 font-LS text-oxford-blue leading-none mb-6">
                        I build web apps that prioritize user needs.
                    </h2>
                    <div className="flex items-center justify-center lg:hidden">
                        <img 
                            src={home}
                            alt="Miguel at Capilano River Regional Park"
                            className="rounded-3xl drop-shadow-lg w-10/12 mb-8"
                        />
                    </div>
                    <p className="text-body font-MT text-oxford-blue mb-8 lg:mb-20">
                        My personal, professional, and academic journeys have
                        equipped me with the skills and experience to produce high
                        quality work no matter the project requirements.
                    </p>
                    <Link
                        to="/about"
                        className="bg-sea-green text-center px-20 py-3 rounded-xl drop-shadow-md text-h3 uppercase font-LS text-alabaster active:bg-oxford-blue focus:outline-none focus:ring-oxford-blue focus:ring-4"
                    >
                        About me
                    </Link>
                </div>
                <div className="hidden lg:flex items-center justify-center lg:col-span-1">
                    <img
                        src={home}
                        alt="Miguel at Capilano River Regional Park"
                        className="rounded-3xl drop-shadow-lg w-[22.5rem]" 
                    />
                </div>    
            </div>
            
            <Divider />
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-3 lg:col-span-1 ">
                    <img
                        src="/portfolio-v2/thumbnails/cashflow.png"
                        alt="Cash flow project thumbnail"
                        className="col-span-1 rounded-2xl drop-shadow-lg"
                    />
                    <img
                        src="/portfolio-v2/thumbnails/opencanvas.png"
                        alt="Open canvas project thumbnail"
                        className="col-span-1 rounded-2xl drop-shadow-lg"
                    />
                    <img
                        src="/portfolio-v2/thumbnails/intelliquiz.png"
                        alt="Intelliquiz project thumbnail"
                        className="col-span-1 rounded-2xl drop-shadow-lg"
                    />
                    <img
                        src="/portfolio-v2/thumbnails/bitebalance.png"
                        alt="Bitebalance project thumbnail"
                        className="col-span-1 rounded-2xl drop-shadow-lg"
                    />
                </div>
                <div className="lg:col-span-1 lg:ml-6">
                    <h3 className="text-h3 text-sea-green font-LS uppercase mb-2">
                        My Work
                    </h3>
                    <h2 className="text-h2 font-LS text-oxford-blue leading-none mb-6">
                        My sites combine reliability and creativity.
                    </h2>
                    <div className="lg:hidden grid grid-cols-2 gap-3 mb-6">
                        <img
                            src="/portfolio-v2/thumbnails/cashflow.png"
                            alt="Cashflow project thumbnail"
                            className="rounded-2xl drop-shadow-lg col-span-1" 
                        />
                        <img
                            src="/portfolio-v2/thumbnails/opencanvas.png"
                            alt="Open Canvas project thumbnail"
                            className="rounded-2xl drop-shadow-lg col-span-1" 
                        />
                        <img
                            src="/portfolio-v2/thumbnails/intelliquiz.png"
                            alt="Intelliquiz project thumbnail"
                            className="rounded-2xl drop-shadow-lg col-span-1" 
                        />
                        <img
                            src="/portfolio-v2/thumbnails/bitebalance.png"
                            alt="Bite balance project thumbnail"
                            className="rounded-2xl drop-shadow-lg col-span-1" 
                        />
                    </div>
                    <p className="text-body font-MT text-oxford-blue mb-8 lg:mb-20">
                        Using the latest design standards, I ensure the best user
                        experience possible while giving each site an attractice and
                        distinctive identity.
                    </p>
                    <Link
                        to="/portfolio"
                        className="bg-sea-green text-center text-nowrap px-10 py-3 rounded-xl drop-shadow-md text-h3 uppercase font-LS text-alabaster active:bg-oxford-blue focus:outline-none focus:ring-oxford-blue focus:ring-4"
                    >
                        View my projects
                    </Link>
                </div>
            </div>
            <Divider />
            <ContactForm title="send me a message" />
            <Divider />
            <Footer />
        </>
    );
};

export default Home;

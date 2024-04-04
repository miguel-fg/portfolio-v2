import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import about from "../images/photos/about.jpg";

import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <h1 className="text-h1 lg:text-h1lg font-LS text-oxford-blue text-center mt-10 leading-none">
                About Me
            </h1>
            <p className="md:w-10/12 lg:w-9/12 md:self-center text-xl lg:text-2xl font-MT text-oxford-blue text-center">
                Hi! I&apos;m Miguel, a developer based in Vancouver, BC. I have many different hobbies including reading, swimming, hiking, drumming, and watching movies.
            </p>
            <Divider />
            <div className="flex items-center justify-center lg:hidden">
                <img
                    src={about}
                    alt="Miguel waving and smiling at you"
                    className="rounded-3xl drop-shadow-lg w-10/12"
                />
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="text-body font-MT lg:col-span-1 text-oxford-blue">
                    <p>
                        In 2021, I completed my Bachelor&apos;s degree in Digital
                        Systems and Robotics Engineering at{" "}
                        <Link
                            to="https://tec.mx/en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold underline active:text-sea-green visited:text-vlink"
                        >
                            Tec de Monterrey
                        </Link>
                        . After which I decided to focus on Computer Science and
                        enroll in a diploma at{" "}
                        <Link
                            to="https://langara.ca/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold underline active:text-sea-green visited:text-vlink"
                        >
                            Langara College
                        </Link>
                        .
                    </p>
                    <br />
                    <p>
                        I've had a dynamic professional journey, starting as a Python instructor at{" "}
                        <Link
                            to="https://www.linkedin.com/company/grupoaerobot/about/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold underline active:text-sea-green visited:text-vlink"
                        >
                            Aerobot Academy
                        </Link>
                        . There, I had the opportunity to mentor three cohorts of
                        students, nurturing their passion for technology and emphasizing the importance of using their tehcnical skills responsibly, with a focus on social impact.
                    </p>
                    <br />
                    <p>
                        Later, I ventured as a 3D printing lab coordinator for my
                        university, Tec de Monterrey. Here, I explored the intersection between
                        technology and manufacturing, and applied automation
                        techniques to streamline processes from design to
                        production.
                    </p>
                    <br />
                    <p>
                        I then held a software development position at{" "}
                        <Link
                            to="https://intesc.mx/quienes-somos/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold underline active:text-sea-green visited:text-vlink"
                        >
                            INTESC
                        </Link>
                        , where I wrote Micropython libraries for image and audio
                        processing for the{" "}
                        <Link
                            to="https://intesc.mx/productos/tarjeta-de-desarrollo-ophyra/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold underline active:text-sea-green visited:text-vlink"
                        >
                            Ophyra
                        </Link>{" "}
                        development board.
                    </p>
                    <br />
                    <p>
                        My decision to pivot towards software and web development
                        brought me to Vancouver to pursue new opportunities in this
                        field.
                    </p>
                    <br />
                    <p>
                        Over the years, I have acquired a versatile skill set
                        encompassing frontend technologies like HTML, CSS, Tailwind,
                        React, and Vue; backend tools including Node, PHP, and
                        Python; database management with MySQL and MongoDB; and
                        RESTful API development with Express and FastAPI.
                    </p>
                </div>
                <div className="hidden lg:flex items-center justify-center lg:col-span-1">
                    <img
                        src={about}
                        alt="Miguel waving and smiling at you"
                        className="rounded-3xl drop-shadow-lg"
                    />
                </div>
            </div>
            <Divider />
            <ContactForm title="let's connect" />
            <Divider />
            <Footer />
        </>
    );
};

export default About;

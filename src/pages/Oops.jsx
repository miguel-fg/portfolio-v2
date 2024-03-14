import Divider from "../components/Divider";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

const Oops = () => {
    return (
        <>
            <h1 className="col-start-1 col-span-12 text-h1 font-LS text-oxford-blue mt-10 leading-none">
                Oops!
            </h1>
            <h2 className="col-span-12 text-subtitle font-MT">
                This page is not available (yet)
            </h2>
            <Link to="/" className="bg-sea-green w-fit text-h3 font-LS uppercase text-alabaster px-10 py-2.5 rounded-xl drop-shadow-md col-span-6 mt-16">
                Go Back
            </Link>
            <Divider />
            <Footer />
        </>
    );
}

export default Oops;
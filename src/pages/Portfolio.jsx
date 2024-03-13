import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

const Portfolio = () => {
    return (
        <>
            <h1 className="text-h1 font-LS text-oxford-blue col-span-12 text-center mt-10">
                My Work
            </h1>
            <Divider />
            <ContactForm title="questions, suggestions, comments?" />
            <Divider />
            <Footer />
        </>
    );
}

export default Portfolio;
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

const Contact = () => {
    return (
        <>
            <h1 className="text-h1 font-LS text-oxford-blue col-span-12 text-center mt-10">
                Contact Me
            </h1>
            <Divider />
            <ContactForm title="send me a message" />
            <Divider />
            <Footer />
        </>
    );
}

export default Contact;
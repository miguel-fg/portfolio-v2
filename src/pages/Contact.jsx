import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

const Contact = () => {
    return (
        <>
            <h1 className="text-h1 lg:text-h1lg font-LS text-oxford-blue text-center mt-10 leading-none">
                Get In Touch
            </h1>
            <p className="md:w-10/12 lg:w-9/12 md:self-center font-MT text-xl lg:text-2xl text-oxford-blue text-center">
                Use the form below or the contact information at the bottom of the page to send me a message. I look forward to hearing
                from you!
            </p>
            <Divider />
            <ContactForm title="send me a message" />
            <Divider />
            <Footer />
        </>
    );
}

export default Contact;

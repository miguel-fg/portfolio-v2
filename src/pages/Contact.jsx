import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

const Contact = () => {
    return (
        <>
            <h1 className="text-h1 font-LS text-oxford-blue col-span-12 text-center mt-10 leading-none">
                Contact Me
            </h1>
            <p className="col-span-8 col-start-3 font-MT text-body text-oxford-blue text-center">Reach out to me using the form below or the contact information provided at the bottom of the page. I look forward to hearing from you!</p>
            <Divider />
            <ContactForm title="send me a message" />
            <Divider />
            <Footer />
        </>
    );
}

export default Contact;
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

const Contact = () => {
    return (
        <>
            <h1 className="text-h1 font-LS text-oxford-blue col-span-12 text-center mt-10 leading-none">
                Contact Me
            </h1>
            <p className="col-span-8 col-start-3 font-MT text-2xl text-oxford-blue text-center">
                Reach out to me using the form below or the contact information at the bottom of the page. You can expect a reply within 1-2 business days. I look forward to hearing
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
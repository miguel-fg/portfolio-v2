import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <>
            <h1 className="text-h1 font-LS text-oxford-blue col-span-12 text-center mt-10">
                Contact Me
            </h1>
            <ContactForm title="send me a message" />
        </>
    );
}

export default Contact;
import ContactForm from "../components/ContactForm";

const Portfolio = () => {
    return (
        <>
            <h1 className="text-h1 font-LS text-oxford-blue col-span-12 text-center mt-10">
                My Work
            </h1>
            <ContactForm title="questions, suggestions, comments?" />
        </>
    );
}

export default Portfolio;
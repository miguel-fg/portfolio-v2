import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <h1 className="col-start-1 col-span-12 text-h1 font-LS text-oxford-blue mt-10">
                Miguel Fierro.
            </h1>
            <ContactForm title="send me a message"/>
            <Footer />
        </>
    );
}

export default Home;

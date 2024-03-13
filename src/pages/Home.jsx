import ContactForm from "../components/ContactForm";

const Home = () => {
    return (
        <>
            <h1 className="col-start-1 col-span-12 text-h1 font-LS text-oxford-blue mt-10">
                Miguel Fierro.
            </h1>
            <ContactForm title="send me a message"/>
        </>
    );
}

export default Home;

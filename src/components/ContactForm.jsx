const ContactForm = (props) => {
    return (
        <div className="col-span-12 bg-sea-green-light rounded-3xl drop-shadow-md">
            <h1 className="text-h3 uppercase font-LS text-oxford-blue text-center my-7">
                {props.title}
            </h1>
            <form className="mx-24 mb-14">
                <div className="flex justify-between">
                    <div>
                        <label
                            htmlFor="name"
                            className="font-MT text-body text-oxford-blue"
                        >
                            Name
                        </label>
                        <br />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-72 h-12 rounded-xl bg-alabaster font-MT text-body text-oxford-blue drop-shadow-sm focus:outline-none focus:ring-sea-green focus:ring-4"
                        ></input>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="font-MT text-body text-oxford-blue"
                        >
                            Email
                        </label>
                        <br />
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="w-72 h-12 rounded-xl bg-alabaster font-MT text-body text-oxford-blue drop-shadow-sm focus:outline-none focus:ring-sea-green focus:ring-4"
                        ></input>
                    </div>
                    <div>
                        <label
                            htmlFor="phone"
                            className="font-MT text-body text-oxford-blue"
                        >
                            Phone
                        </label>
                        <br />
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            className="w-72 h-12 rounded-xl bg-alabaster font-MT text-body text-oxford-blue drop-shadow-sm focus:outline-none focus:ring-sea-green focus:ring-4"
                        ></input>
                    </div>
                </div>
                <div className="my-7">
                    <label
                        htmlFor="message"
                        className="font-MT text-body text-oxford-blue"
                    >
                        Message
                    </label>
                    <br />
                    <textarea
                        id="message"
                        name="message"
                        rows="8"
                        className="w-full bg-alabaster rounded-xl text-oxford-blue text-body font-MT drop-shadow-sm focus:outline-none focus:ring-sea-green focus:ring-4"
                    ></textarea>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        disabled
                        className="bg-oxford-blue text-alabaster text-h3 font-LS uppercase py-2.5 px-24 rounded-xl drop-shadow-sm disabled:opacity-70"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

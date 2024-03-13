import { Link } from "react-router-dom";
import logo from "../images/m.svg";
import resumePDF from "../assets/mfierro-resume.pdf";

const Footer = () => {

    const downloadPDF = () => {
        console.log("Starting PDF download...");

        fetch(resumePDF).then((response) => {
            response.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "mfierro-resume.pdf";
                alink.click();
            })
        }).catch((error) => {
            console.error("Error fetching PDF: ", error);
        })
    }

    return (
        <div className="col-span-10 col-start-2">
            <footer className="flex justify-between">
                <div className="flex flex-col items-center justify-center">
                    <img src={logo} width="80" height="80" alt="Page logo" className="drop-shadow-md"/>
                    <p className="font-LS font-bold text-3xl text-oxford-blue text-center">
                        Miguel <br /> Fierro
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="font-LS text-h3 uppercase text-oxford-blue mb-5">
                        Browse
                    </p>
                    <Link to="/" className="text-body font-MT mb-3 underline text-oxford-blue">
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-body font-MT mb-3 underline text-oxford-blue"
                    >
                        About
                    </Link>
                    <Link
                        to="/portfolio"
                        className="text-body font-MT mb-3 underline text-oxford-blue"
                    >
                        My Work
                    </Link>
                    <Link
                        to="/contact"
                        className="text-body font-MT mb-3 underline text-oxford-blue"
                    >
                        Contact Me
                    </Link>
                </div>
                <div className="flex flex-col">
                    <p className="font-LS text-h3 uppercase text-oxford-blue mb-5">
                        Resources
                    </p>
                    <Link
                        onClick={downloadPDF}
                        className="text-body font-MT mb-3 underline text-oxford-blue"
                    >
                        My Resume
                    </Link>
                    <Link
                        to="https://www.linkedin.com/in/miguelfierro97/"
                        className="text-body font-MT mb-3 underline text-oxford-blue"
                    >
                        LinkedIn
                    </Link>
                    <Link
                        to="https://github.com/miguel-fg"
                        className="text-body font-MT mb-3 underline text-oxford-blue"
                    >
                        GitHub
                    </Link>
                </div>
                <div className="flex flex-col">
                    <p className="font-LS text-h3 uppercase text-oxford-blue mb-5">
                        Contact Me
                    </p>
                    <p className="text-body font-MT mb-3 text-oxford-blue">miguel_fierrog@outlook.com</p>
                    <p className="text-body font-MT mb-3 text-oxford-blue">+1 (778) 317 3727</p>
                    <p className="text-body font-MT mb-3 text-oxford-blue">Based in Vancouver, BC.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

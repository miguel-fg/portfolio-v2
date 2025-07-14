import { Link } from "react-router-dom";
import logo from "../images/m.svg";
import resumePDF from "../assets/mfierro-resume.pdf";

const Footer = () => {
  const email = "hello" + "@" + "miguel" + "-" + "fierro" + "." + "com";
  const phone = "+1" + " (778)" + " 317" + "-" + "3727";

  const downloadPDF = () => {
    console.log("Starting PDF download...");

    fetch(resumePDF)
      .then((response) => {
        response.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);

          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "mfierro-resume.pdf";
          alink.click();
        });
      })
      .catch((error) => {
        console.error("Error fetching PDF: ", error);
      });
  };

  return (
    <div className="lg:w-10/12 lg:mx-auto">
      <footer className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex mb-6 lg:mb-0 lg:flex-col items-center lg:justify-center">
          <img
            src={logo}
            width="80"
            height="80"
            alt="Page logo"
            className="drop-shadow-md"
          />
          <p className="font-LS font-bold text-3xl text-oxford-blue text-center lg:w-min">
            Miguel Fierro
          </p>
        </div>
        <div className="flex flex-col py-6 lg:py-0 lg:border-b-0 border-b border-sea-green border-opacity-50">
          <p className="font-LS text-h3 uppercase text-oxford-blue mb-5">
            Browse
          </p>
          <Link
            to="/"
            className="text-body font-MT mb-3 underline text-oxford-blue active:text-sea-green active:font-bold focus:outline-oxford-blue"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-body font-MT mb-3 underline text-oxford-blue active:text-sea-green active:font-bold focus:outline-oxford-blue"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-body font-MT mb-3 underline text-oxford-blue active:text-sea-green active:font-bold focus:outline-oxford-blue"
          >
            My Work
          </Link>
          <Link
            to="/contact"
            className="text-body font-MT mb-3 underline text-oxford-blue active:text-sea-green active:font-bold focus:outline-oxford-blue"
          >
            Contact Me
          </Link>
        </div>
        <div className="flex flex-col py-6 lg:py-0 lg:border-b-0 border-b border-sea-green border-opacity-50">
          <p className="font-LS text-h3 uppercase text-oxford-blue mb-5">
            Resources
          </p>
          <Link
            to="https://github.com/miguel-fg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body font-MT mb-3 underline text-oxford-blue active:text-sea-green active:font-bold visited:text-vlink focus:outline-oxford-blue"
          >
            GitHub
          </Link>
        </div>
        <div className="flex flex-col mt-6 lg:mt-0">
          <p className="font-LS text-h3 uppercase text-oxford-blue mb-5">
            Contact Me
          </p>
          <p className="text-body font-MT mb-3 text-oxford-blue">{email}</p>
          <p className="text-body font-MT mb-3 text-oxford-blue">{phone}</p>
          <p className="text-body font-MT mb-3 text-oxford-blue">
            Based in Vancouver, BC.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

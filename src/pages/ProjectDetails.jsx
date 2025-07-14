import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import IconArrowBackOutline from "../components/icons/IconArrowBackOutline";
import TechBadge from "../components/TechBadge";
import ProjectGallery from "../components/ProjectGallery";

import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    import(`../content/${projectId}.json`)
      .then((res) => setProjectData(res))
      .catch((err) => {
        console.error(err);
        navigate("/oops", { replace: true });
      });
  }, [projectId]);

  useEffect(() => {
    if (showGallery) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showGallery]);

  if (!projectData) return null;

  return (
    <>
      {showGallery ? (
        <ProjectGallery
          mobilePaths={projectData.mobile_gallery}
          desktopPaths={projectData.desktop_gallery}
          closeModal={() => setShowGallery(false)}
        />
      ) : (
        <></>
      )}
      <h1 className="text-h2 md:text-h1 lg:text-h1lg font-LS text-oxford-blue text-center mt-10 leading-none text-wrap truncate">
        {projectData.name}
      </h1>
      <p className="md:w-10/12 lg:w-9/12 md:self-center text-xl lg:text-2xl font-MT text-oxford-blue text-center">
        {projectData.subtitle}
      </p>
      <Divider />
      <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-6">
        <div className="w-full lg:col-span-1">
          <Link
            to="/portfolio"
            className="hover:underline text-oxford-blue active:text-sea-green"
          >
            <div className="flex flex-row gap-1 items-center mb-2">
              <IconArrowBackOutline />
              <h3 className="text-h3 font-LS uppercase">Back to Portfolio</h3>
            </div>
          </Link>
          <p className="text-body font-MT text-oxford-blue whitespace-pre-line">
            {projectData.description}
          </p>
          <div className="mt-6 hidden lg:flex lg: flex-col">
            <h3 className="text-h3 font-LS uppercase mb-2 text-oxford-blue">
              Features
            </h3>
            <ul className="list-disc list-inside mb-4">
              {projectData.features?.map((feature, index) => (
                <li key={index} className="text-body font-MT mb-2">
                  <span className="font-semibold">{feature.title}</span>:{" "}
                  {feature.description}
                </li>
              ))}
            </ul>
            <h3 className="text-h3 font-LS uppercase mb-2 text-oxford-blue">
              Built With
            </h3>
            <div className="flex flex-wrap gap-4">
              {projectData.stack?.map((tech, index) => (
                <TechBadge key={index} name={tech} />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 lg:col-start-2 items-center justify-center">
          <div
            onClick={() => {
              if (projectData.name !== "Heritage Hub") {
                setShowGallery(true);
              }
            }}
            className="flex w-full items-center justify-center relative hover:cursor-pointer"
          >
            <img
              src={projectData.thumbnail}
              alt="Project thumbnail"
              className={`rounded-xl drop-shadow-md w-10/12 min-w-64 md:min-w-96`}
            />
          </div>
          <div className="flex flex-col w-full lg:flex-row lg:gap-4 justify-center items-center">
            {projectData.mobile_gallery.length > 0 ||
            projectData.desktop_gallery.length > 0 ? (
              <button
                onClick={() => setShowGallery(true)}
                className="bg-sea-green border-4 border-sea-green text-center px-4 md:px-8 py-1 rounded-xl drop-shadow-md text-h3 text-nowrap uppercase font-LS text-alabaster mt-6 active:bg-oxford-blue active:border-oxford-blue focus:outline-none focus:ring-oxford-blue focus:ring-4 w-5/12 lg:w-fit-content hover:bg-primary-600 hover:border-primary-600"
              >
                Gallery
              </button>
            ) : (
              <></>
            )}
            {projectData.web_url ? (
              <Link
                to={projectData.web_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sea-green border-4 border-sea-green text-center px-4 md:px-8 py-1 rounded-xl drop-shadow-md text-h3 text-nowrap uppercase font-LS text-alabaster mt-6 active:bg-oxford-blue active:border-oxford-blue focus:outline-none focus:ring-oxford-blue focus:ring-4 w-5/12 lg:w-fit-content"
              >
                Website
              </Link>
            ) : (
              <></>
            )}
            {projectData.gh_url ? (
              <Link
                to={projectData.gh_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-alabaster border-4 border-primary-600 text-center px-4 md:px-8 py-1 rounded-xl drop-shadow-md text-h3 text-nowrap uppercase font-LS text-primary-700 mt-4 lg:mt-6 active:bg-oxford-blue active:text-alabaster active:border-oxford-blue focus:outline-none focus:ring-oxford-blue focus:ring-4 focus:border-alabaster w-5/12 lg:w-fit-content hover:bg-grayscale-200"
              >
                Github
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="mt-6 lg:hidden">
          <h3 className="text-h3 font-LS uppercase mb-2 text-oxford-blue">
            Features
          </h3>
          <ul className="list-disc list-inside mb-4">
            {projectData.features?.map((feature, index) => (
              <li key={index} className="text-body font-MT mb-2">
                <span className="font-semibold">{feature.title}</span>:{" "}
                {feature.description}
              </li>
            ))}
          </ul>
          <h3 className="text-h3 font-LS uppercase mb-2 text-oxford-blue">
            Built With
          </h3>
          <div className="flex gap-4 flex-wrap">
            {projectData.stack?.map((tech, index) => (
              <TechBadge key={index} name={tech} />
            ))}
          </div>
        </div>
      </div>
      <Divider />
      <ContactForm title="send me a message" />
      <Divider />
      <Footer />
    </>
  );
};

export default ProjectDetails;

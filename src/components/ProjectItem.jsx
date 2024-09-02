import { Link } from "react-router-dom";

const ProjectItem = (props) => {
    const { name, url_name, subtitle, description, thumbnail } = props.project;

    return (
        <div className="flex flex-col md:flex-row">
            <div className="hidden mx-auto md:flex items-center justify-center">
                <img
                    src={thumbnail}
                    alt="Project thumbnail"
                    className="rounded-3xl md:max-w-80 lg:max-w-96 drop-shadow-lg"
                />
            </div>
            <div className="md:ml-5 lg:ml-10 flex flex-col justify-between">
                <h2 className="text-[3rem] font-[700] md:text-h2 font-LS text-oxford-blue leading-none">
                    {name}
                </h2>
                <div className="w-11/12 mx-auto items-center justify-center md:hidden">
                    <img
                        src={thumbnail}
                        alt="Project thumbnail"
                        className="rounded-3xl drop-shadow-lg" 
                    />
                </div>                 
                <h3 className="mt-2 text-h3 font-LS text-oxford-blue">{subtitle}</h3>
                <p className="mt-4 text-body font-MT text-oxford-blue">
                    {description}
                </p>
                <Link
                    to={`/project/${url_name}`}
                    className="mt-4 mb-10 md:mb-2 bg-sea-green w-fit text-h3 font-LS uppercase text-alabaster px-10 py-2.5 rounded-xl drop-shadow-md active:bg-oxford-blue focus:outline-none focus:ring-oxford-blue focus:ring-4"
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
}

export default ProjectItem;

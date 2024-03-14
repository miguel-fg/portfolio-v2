import { Link } from "react-router-dom";

const ProjectItem = (props) => {
    const { name, subtitle, description, thumbnail } = props.project;

    return (
        <div className="col-span-12 flex flex-row">
            <div className="w-96 flex items-center justify-center">
                <img
                    src={thumbnail}
                    alt="Project thumbnail"
                    className="max-w-96 rounded-3xl"
                />
            </div>
            <div className="ml-10 flex flex-col justify-between">
                <h2 className="text-h2 font-LS text-oxford-blue leading-none">
                    {name}
                </h2>
                <h3 className="text-h3 font-LS text-oxford-blue">{subtitle}</h3>
                <p className="text-body font-MT text-oxford-blue">
                    {description}
                </p>
                <Link to="/oops" className="bg-sea-green w-fit text-h3 font-LS uppercase text-alabaster px-10 py-2.5 rounded-xl drop-shadow-md">
                    Learn More
                </Link>
            </div>
        </div>
    );
}

export default ProjectItem;
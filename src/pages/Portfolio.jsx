import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Divider from '../components/Divider';
import ProjectItem from '../components/ProjectItem';

import data from '../assets/projectData.json';

const Portfolio = () => {
  const items = data.projects.map((project) => (
    <ProjectItem key={project.id} project={project} />
  ));

  return (
    <>
      <h1 className='text-h1 lg:text-h1lg font-LS text-oxford-blue text-center mt-10 leading-none'>
        My Work
      </h1>
      <Divider />
      <div className='space-y-16'>{items}</div>
      <Divider />
      <ContactForm title='ready to talk about your project?' />
      <Divider />
      <Footer />
    </>
  );
};

export default Portfolio;

import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

import { Link } from "react-router-dom";
import StackIcon from 'tech-stack-icons';

import home from "../images/photos/home.jpg";

const Home = () => {
    return (
      <>
        <h1 className='text-h1 md:text-h1lg font-LS text-oxford-blue mt-10 leading-none'>
          Miguel Fierro.
        </h1>
        <h2 className='text-subtitle font-MT text-oxford-blue leading-tight'>
          Software & web developer
        </h2>
        <p className='text-xl lg:text-2xl text-oxford-blue font-MT mt-6'>
          I make interactive full stack web applications.
        </p>
        <div className='flex flex-col w-9/12 lg:flex-row gap-20'>
          <Link
            to='/portfolio'
            className='bg-sea-green border-4 border-sea-green text-center px-5 md:px-10 py-2.5 rounded-xl drop-shadow-md text-h3 text-nowrap uppercase font-LS text-alabaster mt-0 lg:mt-16 active:bg-oxford-blue active:border-oxford-blue focus:outline-none focus:ring-oxford-blue focus:ring-4'
          >
            See my work
          </Link>
          <Link
            to='/contact'
            className='bg-alabaster border-4 border-sea-green text-center px-5 md:px-10 py-2.5 rounded-xl drop-shadow-md text-h3 text-nowrap uppercase font-LS text-oxford-blue mt-0 lg:mt-16 active:bg-oxford-blue active:text-alabaster active:border-oxford-blue focus:outline-none focus:ring-oxford-blue focus:ring-4 focus:border-alabaster'
          >
            Get in touch
          </Link>
        </div>
        <Divider />
        <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
          <div className='lg:col-span-1'>
            <h3 className='text-h3 text-sea-green font-LS uppercase mb-2'>
              About Me
            </h3>
            <h2 className='text-h2 font-LS text-oxford-blue leading-none mb-6'>
              I build web apps that prioritize user needs.
            </h2>
            <div className='flex items-center justify-center lg:hidden'>
              <img
                src={home}
                alt='Miguel at Capilano River Regional Park'
                className='rounded-3xl drop-shadow-lg w-10/12 mb-8'
              />
            </div>
            <p className='text-body font-MT text-oxford-blue mb-8 lg:mb-20'>
              My personal, professional, and academic journeys have equipped me
              with the skills and experience to produce high quality work no
              matter the project requirements.
            </p>
            <Link
              to='/about'
              className='bg-sea-green text-center px-20 py-3 rounded-xl drop-shadow-md text-h3 uppercase font-LS text-alabaster active:bg-oxford-blue focus:outline-none focus:ring-oxford-blue focus:ring-4'
            >
              About me
            </Link>
          </div>
          <div className='hidden lg:flex items-center justify-center lg:col-span-1'>
            <img
              src={home}
              alt='Miguel at Capilano River Regional Park'
              className='rounded-3xl drop-shadow-lg w-[22.5rem]'
            />
          </div>
        </div>

        <Divider />
        <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
          <div className='hidden lg:grid lg:grid-cols-5 xl:grid-cols-6 lg:gap-3 lg:col-span-1 '>
            <StackIcon name='reactjs' className='col-span-1' />
            <StackIcon name='vuejs' className='col-span-1' />
            <StackIcon name='html5' className='col-span-1' />
            <StackIcon name='nodejs' className='col-span-1' />
            <StackIcon name='nuxtjs' className='col-span-1' />
            <StackIcon name='js' className='col-span-1' />
            <StackIcon name='mongodb' className='col-span-1' />
            <StackIcon name='postgresql' className='col-span-1' />
            <StackIcon name='tailwindcss' className='col-span-1' />
            <StackIcon name='css3' className='col-span-1' />
            <StackIcon name='figma' className='col-span-1' />
            <StackIcon name='git' className='col-span-1' />
            <StackIcon name='github' className='col-span-1' />
            <StackIcon name='aws' className='col-span-1' />
            <StackIcon name='render' className='col-span-1' />
            <StackIcon name='adobe' className='col-span-1' />
            <StackIcon name='openai' className='col-span-1' />
          </div>
          <div className='lg:col-span-1 lg:ml-6'>
            <h3 className='text-h3 text-sea-green font-LS uppercase mb-2'>
              My Work
            </h3>
            <h2 className='text-h2 font-LS text-oxford-blue leading-none mb-6'>
              Modern solutions for better web experiences.
            </h2>
            <div className='lg:hidden grid grid-cols-6 gap-6 mb-6'>
              <StackIcon name='reactjs' className='col-span-1' />
              <StackIcon name='vuejs' className='col-span-1' />
              <StackIcon name='html5' className='col-span-1' />
              <StackIcon name='nodejs' className='col-span-1' />
              <StackIcon name='nuxtjs' className='col-span-1' />
              <StackIcon name='js' className='col-span-1' />
              <StackIcon name='mongodb' className='col-span-1' />
              <StackIcon name='postgresql' className='col-span-1' />
              <StackIcon name='tailwindcss' className='col-span-1' />
              <StackIcon name='css3' className='col-span-1' />
              <StackIcon name='figma' className='col-span-1' />
              <StackIcon name='git' className='col-span-1' />
              <StackIcon name='github' className='col-span-1' />
              <StackIcon name='aws' className='col-span-1' />
              <StackIcon name='render' className='col-span-1' />
              <StackIcon name='adobe' className='col-span-1' />
              <StackIcon name='openai' className='col-span-1' />
            </div>
            <p className='text-body font-MT text-oxford-blue mb-8 lg:mb-10'>
              I use the best tools and frameworks to create robust, responsive, and user-friendly websites and applications. Each project integrates the latest in design and technology, ensuring an engaging experience for users.
            </p>
            <Link
              to='/portfolio'
              className='bg-sea-green text-center text-nowrap px-5 md:px-10 py-3 rounded-xl drop-shadow-md text-h3 uppercase font-LS text-alabaster active:bg-oxford-blue focus:outline-none focus:ring-oxford-blue focus:ring-4'
            >
              View my projects
            </Link>
          </div>
        </div>
        <Divider />
        <ContactForm title='send me a message' />
        <Divider />
        <Footer />
      </>
    );
};

export default Home;

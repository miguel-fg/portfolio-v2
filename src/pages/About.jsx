import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Divider from '../components/Divider';
import about from '../images/photos/about.jpg';

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1 className='text-h1 lg:text-h1lg font-LS text-oxford-blue text-center mt-10 leading-none'>
        About Me
      </h1>
      <p className='md:w-10/12 lg:w-9/12 md:self-center text-xl lg:text-2xl font-MT text-oxford-blue text-center'>
        Hi! I&apos;m Miguel, a developer based in Vancouver, BC. I have many
        different hobbies including reading, swimming, hiking, drumming, and
        watching movies.
      </p>
      <Divider />
      <div className='flex items-center justify-center lg:hidden'>
        <img
          src={about}
          alt='Miguel waving and smiling at you'
          className='rounded-3xl drop-shadow-lg w-10/12'
        />
      </div>
      <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
        <div className='text-body font-MT lg:col-span-1 text-oxford-blue'>
          <div>
            <h2 className='text-h3 font-LS text-sea-green'>WORK EXPERIENCE</h2>
            <ul className='list-disc list-inside space-y-4'>
              <li>
                Python & Robotics Instructor
                <ul className='pl-4'>
                  <li>
                    <Link
                      to='https://www.grupoaerobot.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-bold underline active:text-sea-green visited:text-vlink'
                    >
                      Aerobot Academy
                    </Link>
                    , Puebla, Mexico (2017)
                  </li>
                </ul>
              </li>
              <li>
                3D Printing Lab Coordinator
                <ul className='pl-4'>
                  <li>
                    <Link
                      to='https://tec.mx/en/about-us'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-bold underline active:text-sea-green visited:text-vlink'
                    >
                      Tec de Monterrey
                    </Link>
                    , Puebla, Mexico (2020)
                  </li>
                </ul>
              </li>
              <li>
                ARM Software Developer
                <ul className='pl-4'>
                  <li>
                    <Link
                      to='https://intesc.mx/quienes-somos/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-bold underline active:text-sea-green visited:text-vlink'
                    >
                      INTESC
                    </Link>
                    , Puebla, Mexico (2021)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='mt-10'>
            <h2 className='text-h3 font-LS text-sea-green'>EDUCATION</h2>
            <ul className='list-disc list-inside space-y-4'>
              <li>
                Bachelor's Degree
                <ul className='pl-4'>
                  <li>Digital Systems & Robotics Engineering</li>
                  <li>
                    <Link
                      to='https://tec.mx/en/about-us'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-bold underline active:text-sea-green visited:text-vlink'
                    >
                      Tec de Monterrey
                    </Link>
                    , Puebla, Mexico (2021)
                  </li>
                </ul>
              </li>
              <li>
                Diploma
                <ul className='pl-4'>
                  <li>Computer Studies</li>
                  <li>
                    <Link
                      to='https://langara.ca/about-langara/index.html'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-bold underline active:text-sea-green visited:text-vlink'
                    >
                      Langara College
                    </Link>
                    , Vancouver, Canada (2024)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='mt-10'>
            <h2 className='text-h3 font-LS text-sea-green'>TECHNICAL SKILLS</h2>
            <ul className='list-disc list-inside space-y-4'>
              <li className='font-bold'>
                Frontend
                <ul className='list-disc list-outside pl-12 font-normal'>
                  <li>HTML5, JavaScript ES6, TypeScript</li>
                  <li>ReactJS, VueJS, Nuxt3</li>
                  <li>CSS3, Tailwind, Material UI, Bootstrap</li>
                </ul>
              </li>
              <li className='font-bold'>
                Backend
                <ul className='list-disc list-outside pl-12 font-normal'>
                  <li>NodeJS, Bun, PHP, Python</li>
                  <li>MongoDB, SQLite, PostgreSQL</li>
                  <li>ExpressJS, Hono, Nitro, FastAPI</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='hidden lg:flex items-center justify-center lg:col-span-1'>
          <img
            src={about}
            alt='Miguel waving and smiling at you'
            className='rounded-3xl drop-shadow-lg'
          />
        </div>
      </div>
      <Divider />
      <ContactForm title="let's connect" />
      <Divider />
      <Footer />
    </>
  );
};

export default About;

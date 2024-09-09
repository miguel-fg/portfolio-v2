import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = (props) => {
  const { title } = props;
  const [attempted, setAttempted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let errors = {};
    const nameRE = /^[a-zA-Z\s]+$/;
    const emailRE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRE = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!name) {
      errors.name = 'Name cannot be empty';
    } else if (!nameRE.test(name)) {
      errors.name = 'Name can only contain letters and spaces';
    }

    if (!email) {
      errors.email = 'Email cannot be empty';
    } else if (!emailRE.test(email)) {
      errors.email = 'Email format is invalid';
    }

    if (phone && !phoneRE.test(phone)) {
      errors.phone = 'Phone number format is invalid';
    }

    if (!message) {
      errors.message = 'Message cannot be empty';
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const resetForm = () => {
    setLoading(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setAttempted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAttempted(true);

    if (isFormValid) {
      setLoading(true);
      const templateParams = {
        name,
        email,
        phone: `${phone || 'Not provided'}`,
        message,
        subject: `New contact from ${name}`,
      };

      await toast.promise(emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_USER_ID
        ), {
          loading: 'Sending...',
          success: (data) => {
            console.log("SUCCESS!", data.status, data.text);
            setLoading(false);
            return 'Thank you! I will get back to you shortly.';
          },
          error: (err) => {
            console.error("ERROR!", err.toString());
            setLoading(false);
            return "Something went wrong with the email service.\n\nPlease try again later."
          }
        }, {
          style: {
            minWidth: '300px'
          }
        });
      
      setLoading(false);
      resetForm();
    } else {
      console.log('Form has errors.');
    }
  };

  useEffect(() => {
    validateForm();
  }, [name, email, phone, message, attempted]);

  return (
    <>
      <Toaster
        toastOptions={{ className: 'font-MT text-body', duration: 5000 }}
      />
      <div className='bg-sea-green-light rounded-3xl drop-shadow-md'>
        <h1 className='text-h3 uppercase font-LS text-oxford-blue text-center my-7'>
          {title}
        </h1>
        <form className='mx-12 lg:mx-24 mb-14' onSubmit={handleSubmit}>
          <div className='flex flex-col lg:flex-row lg:justify-between lg:gap-4'>
            <div>
              <label
                htmlFor='name'
                className='font-MT text-body text-oxford-blue'
              >
                Name
              </label>
              <br />
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                placeholder='Jane Doe'
                className={`pl-1 w-full mb-1 xl:w-72 h-12 rounded-xl bg-alabaster font-MT text-body text-oxford-blue drop-shadow-sm focus:border-none focus:outline-none focus:ring-sea-green focus:ring-4 ${
                  attempted && errors.name ? 'border-4 border-form-error' : ''
                }`}
                onChange={(e) => setName(e.target.value)}
              ></input>
              {attempted && errors.name && (
                <p className='text-form-error font-LS text-body'>
                  {errors.name}
                </p>
              )}
            </div>
            <div className='mt-6 lg:mt-0'>
              <label
                htmlFor='email'
                className='font-MT text-body text-oxford-blue'
              >
                Email
              </label>
              <br />
              <input
                type='text'
                id='email'
                name='email'
                value={email}
                disabled={loading}
                placeholder='your@email.com'
                className={`pl-1 w-full mb-1 xl:w-72 h-12 rounded-xl bg-alabaster font-MT text-body text-oxford-blue drop-shadow-sm focus:border-none focus:outline-none focus:ring-sea-green focus:ring-4 ${
                  attempted && errors.email ? 'border-4 border-form-error' : ''
                }`}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              {attempted && errors.email && (
                <p className='text-form-error font-LS text-body'>
                  {errors.email}
                </p>
              )}
            </div>
            <div className='mt-6 lg:mt-0'>
              <label
                htmlFor='phone'
                className='font-MT text-body text-oxford-blue'
              >
                Phone (optional)
              </label>
              <br />
              <input
                type='text'
                id='phone'
                name='phone'
                value={phone}
                placeholder='123-456-7890'
                className={`w-full mb-1 xl:w-72 h-12 rounded-xl bg-alabaster font-MT text-body text-oxford-blue drop-shadow-sm focus:border-none focus:outline-none focus:ring-sea-green focus:ring-4 ${
                  attempted && errors.phone ? 'border-4 border-form-error' : ''
                }`}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
              {attempted && errors.phone && (
                <p className='text-form-error font-LS text-body'>
                  {errors.phone}
                </p>
              )}
            </div>
          </div>
          <div className='my-7'>
            <label
              htmlFor='message'
              className='font-MT text-body text-oxford-blue'
            >
              Message
            </label>
            <br />
            <textarea
              id='message'
              name='message'
              value={message}
              rows='8'
              placeholder='Say hi.'
              className={`pl-1 pt-1 w-full bg-alabaster rounded-xl text-oxford-blue text-body font-MT drop-shadow-sm focus:border-none focus:outline-none focus:ring-sea-green focus:ring-4 ${
                attempted && errors.message ? 'border-4 border-form-error' : ''
              }`}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {attempted && errors.message && (
              <p className='text-form-error font-LS text-body'>
                {errors.message}
              </p>
            )}
          </div>
          <div className='flex items-center justify-center'>
            <button className='bg-oxford-blue text-alabaster text-h3 font-LS uppercase py-2.5 px-12 lg:px-24 rounded-xl drop-shadow-sm disabled:opacity-70'>
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

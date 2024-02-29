import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="mt-20 flex items-center justify-center">
        <div className="max-w-7xl flex flex-col items-center justify-center py-4">
          <h2 className='text-2xl my-2 font-bold'>Contact Us</h2>
          <p>If you have any query regrading Site, Advertisement and any other issue, please feel free to contact at <strong>arkay518@gmail.com</strong></p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

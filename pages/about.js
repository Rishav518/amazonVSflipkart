import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const About = () => {
  return (
    <>
      <Header />
      <div className="mt-20 flex items-center justify-center">
        <div className="max-w-7xl flex flex-col items-center justify-center py-4">
          <h2 className='text-2xl my-2 font-bold'>About Us</h2>
          <p>
            The Amazon vs Flipkart comparison tool provides users with an
            efficient way to analyze and contrast products from these two
            leading e-commerce giants. This innovative tool leverages
            cutting-edge technology to fetch real-time data, ensuring accurate
            price, rating, and feature comparisons. Users can conveniently input
            product URLs, and the tool swiftly retrieves pertinent information.
            With a user-friendly interface, it empowers consumers to make
            informed decisions based on factors like pricing, ratings, and
            additional product details. Seamlessly integrating with Amazon and
            Flipkart, this tool is a game-changer, delivering an enhanced
            shopping experience for users seeking the best deals and product
            insights.
          </p>
          <p>
            If you have any query regrading Site, Advertisement and any other
            issue, please feel free to contact at{' '}
            <strong>arkay518@gmail.com</strong>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

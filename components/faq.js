// FaqComponent.js
import React, { useState } from 'react';

const faqData = [
    {
      id: 1,
      question: 'How do I compare products between Amazon and Flipkart?',
      answer: 'Enter the product URLs from both websites, and our platform will fetch and display detailed comparisons for you.',
    },
    {
      id: 2,
      question: 'Are the prices displayed real-time on the comparison?',
      answer: 'Yes, the prices are dynamically fetched from both Amazon and Flipkart to provide you with up-to-date information.',
    },
    {
      id: 3,
      question: 'Can I compare different product categories, or is it limited to specific types of products?',
      answer: 'Our platform allows you to compare a wide range of products across various categories available on both Amazon and Flipkart.',
    },
    {
      id: 4,
      question: 'How accurate is the product information provided in the comparison?',
      answer: 'We strive for accuracy, but it\'s always a good practice to verify details on the respective websites for the most current information.',
    },
    {
      id: 5,
      question: 'What criteria are considered when comparing products?',
      answer: 'We compare various aspects, including prices, specifications, customer ratings, and additional features to provide a comprehensive analysis.',
    },
    {
      id: 6,
      question: 'How often is the data updated on the comparison platform?',
      answer: 'The data is updated regularly to ensure that you receive the latest information from both Amazon and Flipkart.',
    },
    {
      id: 7,
      question: 'Can I trust the reviews and ratings displayed for products?',
      answer: 'The reviews and ratings are sourced directly from Amazon and Flipkart. We recommend checking the individual websites for a broader range of opinions.',
    },
    {
      id: 8,
      question: 'Are shipping and delivery times taken into account in the comparison?',
      answer: 'While we provide information on shipping, it\'s advisable to check the respective websites for the most accurate delivery estimates.',
    },
    {
      id: 9,
      question: 'How do I access the comparison results after entering the product URLs?',
      answer: 'Simply click on the "Compare" button, and the detailed product comparison results will be displayed on the page.',
    },
    {
      id: 10,
      question: 'Can I customize the comparison based on specific features or preferences?',
      answer: 'Yes, our platform allows you to customize the comparison based on features that matter most to you, providing a tailored analysis for your needs.',
    },
  ];
  

const FaqComponent = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (id) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  return (
    <div className="bg-gray-300 flex flex-col items-center justify-center w-full font-Poppins">
      <h1 className="text-2xl font-bold my-4 text-gray-600">Frequently Asked Questions</h1>

      <ul className='w-[90%] lg:w-1/2 py-4'>
        {faqData.map((faq) => (
          <li key={faq.id} className="bg-white my-2 px-4 py-8 rounded shadow-xl">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleQuestionClick(faq.id)}
            >
              <h2 className="text-lg font-bold text-gray-600">{faq.question}</h2>
              <div className="transform transition-transform duration-300">
                {selectedQuestion === faq.id ? (
                  <ion-icon className="text-2xl" name="chevron-up-outline"></ion-icon>
                ) : (
                  <ion-icon className="text-2xl" name="chevron-down-outline"></ion-icon>
                )}
              </div>
            </div>

            {selectedQuestion === faq.id && (
              <p className="mt-2 text-lg text-gray-600">{faq.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqComponent;

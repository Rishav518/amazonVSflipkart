'use client';
import React, { useState } from 'react';

const Body = () => {
    const [amazonURL, setAmazonURL] = useState('');
    const [flipkartURL, setFlipkartURL] = useState('');
    const [pasteClickedAmazon, setPasteClickedAmazon] = useState(false);
    const [pasteClickedFlipkart, setPasteClickedFlipkart] = useState(false);
    const [amazonData, setAmazonData] = useState(null);
    const [flipkartData, setFlipkartData] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const handlePasteAmazon = () => {
      navigator.clipboard.readText().then((clipboardText) => {
        setAmazonURL(clipboardText);
        setPasteClickedAmazon(true);
      });
    };
  
    const handlePasteFlipkart = () => {
      navigator.clipboard.readText().then((clipboardText) => {
        setFlipkartURL(clipboardText);
        setPasteClickedFlipkart(true);
      });
    };
  
    const handleClearAmazon = () => {
      setAmazonURL('');
      setPasteClickedAmazon(false);
    };
  
    const handleClearFlipkart = () => {
      setFlipkartURL('');
      setPasteClickedFlipkart(false);
    };
  
    const fetchAmazonData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/amazon', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: amazonURL }),
        });
  
        const data = await response.json();
        setAmazonData(data);
      } catch (error) {
        console.error('Error fetching Amazon data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const fetchFlipkartData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/flipkart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: flipkartURL }),
        });
  
        const data = await response.json();
        setFlipkartData(data);
      } catch (error) {
        console.error('Error fetching Flipkart data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const handleCompare = () => {
      if (!amazonURL || !flipkartURL) {
        alert('Please enter valid URLs for both Amazon and Flipkart');
        return;
      }
      fetchAmazonData();
      fetchFlipkartData();
    };

  return (
    <>
      <div className="flex flex-col space-y-6 items-center justify-center h-80 bg-gradient-to-l from-fuchsia-500 to-blue-700">
        <div className="flex items-center flex-col lg:flex-row lg:space-y-0 space-y-4 lg:space-x-4">
          {/* Amazon Input */}
          <div className="flex items-center bg-white rounded-lg lg:w-max w-[90%]">
            <input
              type="text"
              className="h-14 w-full lg:w-80 bg-white rounded-lg px-4 focus:outline-none text-gray-500"
              placeholder="Amazon URL"
              value={amazonURL}
              onChange={(e) => setAmazonURL(e.target.value)}
              required
            />
            {!pasteClickedAmazon && (
              <div
                className="flex items-center mx-2 px-2 py-2 rounded bg-blue-800 text-white hover:bg-fuchsia-600 ease-in-out duration-500 cursor-pointer"
                onClick={handlePasteAmazon}
              >
                <ion-icon className="text-2xl" name="clipboard-outline"></ion-icon>
                <div>Paste</div>
              </div>
            )}
            {amazonURL && (
              <div
                className="flex items-center mx-2 px-2 py-2 rounded bg-red-500 text-white hover:bg-green-800 ease-in-out duration-500 cursor-pointer"
                onClick={handleClearAmazon}
              >
                <ion-icon
                  className="text-2xl hover:text-red-500"
                  name="close-outline"
                ></ion-icon>
              </div>
            )}
          </div>

          {/* Flipkart Input */}
          <div className="flex items-center bg-white rounded-lg lg:w-max w-[90%]">
            <input
              type="text"
              className="h-14 w-full lg:w-80 bg-white rounded-lg px-4 focus:outline-none text-gray-500"
              placeholder="Flipkart URL"
              value={flipkartURL}
              onChange={(e) => setFlipkartURL(e.target.value)}
              required
            />
            {!pasteClickedFlipkart && (
              <div
                className="flex items-center mx-2 px-2 py-2 rounded bg-blue-800 text-white hover:bg-fuchsia-600 ease-in-out duration-500 cursor-pointer"
                onClick={handlePasteFlipkart}
              >
                <ion-icon className="text-2xl" name="clipboard-outline"></ion-icon>
                <div>Paste</div>
              </div>
            )}
            {flipkartURL && (
              <div
                className="flex items-center mx-2 px-2 py-2 rounded bg-red-500 text-white hover:bg-green-800 ease-in-out duration-500 cursor-pointer"
                onClick={handleClearFlipkart}
              >
                <ion-icon
                  className="text-2xl hover:text-red-500"
                  name="close-outline"
                ></ion-icon>
              </div>
            )}
          </div>
        </div>

        {/* Compare Button */}
        <button onClick={handleCompare} className="bg-gradient-to-r from fuchsia-500 to blue-800 px-4 py-2 rounded-lg text-white shadow-xl focus:outline-none">
          {loading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-500 mr-2"></div>
              <div>Loading...</div>
            </div>
          ) : (
            'Compare'
          )}
        </button>      
      </div>

      {/* Display fetched data */}
      {amazonData && flipkartData &&
        <div className="flex items-center justify-center bg-gray-900 ">
          
        <div className="flex justify-center max-h-screen bg-gray-700  lg:w-[80%] px-4 my-2 rounded-xl overflow-scroll scrollbar-hide">

            <div className="w-1/2 items-center justify-center mx-2">
                <h3 className="text-left my-2 text-lg text-white font-medium ">{amazonData.name}</h3>
                <div className=" flex items-center justify-center">
                <div className='h-60 w-60 overflow-hidden'>
                <img src={amazonData.image_url} alt="Amazon Product" />
                </div>
                </div>
                <div className="flex text-white text-xl"><div className="font-medium">Current Price: </div><p className="mx-2 text-green-500">{amazonData.current_price}</p></div>
                <div className="flex text-white text-lg"><div className="font-medium">Original Price: </div><p className="mx-2 text-red-500 ">{amazonData.real_price}</p></div>
                
                <table className="my-2">
                    <tbody>
                    {Object.entries(amazonData.table_data).map(([key, value]) => (
                        <tr key={key}>
                        <td className="bg-fuchsia-700 py-1 px-4 font-medium border-b-2 border-gray-900"> {key}</td>
                        <td className="bg-blue-600 text-gray-50 py-1 px-4  border-b-2 border-gray-900">{value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
          </div>
            <div className="w-1/2 items-center justify-center mx-2 text-white ">
                <h3 className="text-left my-2 text-lg text-white font-medium">{flipkartData.name}</h3>
                <div className=" flex items-center justify-center">
                    <div className='h-60 w-60 overflow-hidden'>
                <img className='h-full w-full' src={flipkartData.image_url} alt="Flipkart Product" />
                    </div>
                </div>
                <div className="flex text-xl"><div className="font-medium">Current Price: </div><p className="mx-2 text-green-500">{flipkartData.current_price}</p></div>
                <div className="flex text-lg"><div className="font-medium">Original Price: </div><p className="mx-2 text-red-500 ">{flipkartData.real_price}</p></div>
                
                <table className="my-2">
                    <tbody>
                    {Object.entries(flipkartData.table_data).map(([key, value]) => (
                        <tr key={key}>
                        <td className="bg-fuchsia-700 text-gray-900 py-1 px-4 font-medium border-b-2 border-gray-900"> {key}</td>
                        <td className="bg-blue-600 py-1 px-4  border-b-2 border-gray-900">{value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
          </div>
          
          </div>
        </div>
      }
    
    </>
  );
};

export default Body;

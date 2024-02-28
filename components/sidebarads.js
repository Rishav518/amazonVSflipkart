import React, { useEffect } from 'react';
import Image from 'next/image';
import Adsense from './ad';
const Sidebarads = () => {

  return (
    <>
    <div className=" hidden lg:w-[2%] xl:flex items-start justify-center  h-screen sticky top-0 mt-16 ">
      <div className="flex-col space-y-4 m-2 w-full px-4">
        
      <div className='flex-col w-full font-medium mt-14'>
          
          {/* <Adsense/> */}
        </div>
        {/* <div className='h-[300px] w-[275px] overflow-hidden rounded-xl shadow-xl shadow-fuchsia-400 cursor-pointer '>
        <a href='https://jasper.ai/?fpr=rishav14' target={'_blank'}  rel="noreferrer">
        <Image src={"/Jasper.jpg"} height={300} width={275} alt={"Jasper AI"}></Image>
        </a>
        </div> */}

        {/* <Adsense/> */}
        {/* Best Deals */}
        {/* <div className='flex'>
          <div className='flex flex-col  w-full'>
            <div className='font-medium text-white px-6 rounded-tr-xl rounded-tl-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl py-1'>Best Deals</div>
            <div className='border-violet-500 border-l-2 border-r-2 border-b-2 py-2 px-6 flex flex-col'>
              <div className='border-b-2 border-violet-500 py-2 text-xl flex items-center justify-start'>
                <div><Image src={"/hostinger.png"} width={20} height={20} alt={" "} /></div>
                <div className='mx-2 text-blue-700 font-medium cursor-pointer hover:scale-105 hover:text-violet-600'><a href="https://hostinger.in?REFERRALCODE=1RISHAV72" target={"_blank"} rel="noreferrer">Hostinger</a></div>
              </div>
              <div className='border-b-2 border-violet-500 py-2 text-xl flex items-center justify-start'>
                <div><Image src={"/digi.png"} width={20} height={20} alt={" "} /></div>
                <div className='mx-2 text-blue-500 font-medium cursor-pointer hover:scale-105 hover:text-blue-600'><a href="https://m.do.co/c/efe1f62bf0db" target={"_blank"} rel="noreferrer">DigitalOcean</a></div>
              </div>
              <div className='border-b-2 border-violet-500 py-2 text-xl flex items-center justify-start'>
                <div><Image src={"/namecheap.png"} width={20} height={20} alt={" "} /></div>
                <div className='mx-2 text-orange-500 font-medium cursor-pointer hover:scale-105 hover:text-orange-600'><a href="https://namecheap.pxf.io/15XPNd" target={"_blank"} rel="noreferrer">NameCheap</a></div>
              </div>
              
            </div>
          </div>
        </div> */}
        {/* Best deals ends  */}
        
        {/* <div>
        <a href="https://publishers.adsterra.com/referral/1Y6AmSBcdy">
            <Image alt="banner" width={250} height={250} src="https://landings-cdn.adsterratech.com/referralBanners/png/300%20x%20250%20px.png" /></a>
        </div> */}
      </div>
    </div>
    </>
  );
};

export default Sidebarads;

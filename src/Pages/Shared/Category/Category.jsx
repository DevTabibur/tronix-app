import React from "react";
import "./Category.css";

import Desktop from '../../../assets/images/desktop-48x48.png';
import Laptop from '../../../assets/images/laptop-48x48.png';
import Cpu from '../../../assets/images/cpu-48x48.png';
import Accessories from '../../../assets/images/accessories-48x48.png';
import Gpu from '../../../assets/images/gpu-48x48.png';
import Headphone from '../../../assets/images/headphone-48x48.png';
import Ssd from '../../../assets/images/SSD-48x48.png';
import Webcam from '../../../assets/images/webcam-48x48.png';

const Category = () => {

    const transformStyle = {
        transform: 'scale(1.5)',
        opacity: '0.1'
    }

    const bgStyle ={background: 'radial-gradient(black, transparent 60%)',
    transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
     opacity: '0.2'
    }

  return (
    <div className="mx-auto container px-4">
      <div className="section-title pt-5">
        <h2 className="text-3xl">Featured Category</h2>
        <p>Get Your Desired Product from Featured Category!</p>
      </div>
      <div className="category-options md:grid grid-cols-8 gap-4 text-center">

        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
        <img className="mb-1 mx-auto" src={Desktop} alt='desktop' />
        <h4 className="text-xl">Desktop</h4>
        </div>

        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
        <img className="mb-1 mx-auto" src={Laptop} alt='Laptop' />
        <h4 className="text-xl">Laptop</h4>
        </div>

        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
        <img className="mb-1 mx-auto" src={Webcam} alt='Webcam' />
        <h4 className="text-xl">Webcam</h4>
        </div>

        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
        <img className="mb-1 mx-auto" src={Cpu} alt='Cpu' />
        <h4 className="text-xl">CPU</h4>
        </div>

        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
        <img className="mb-1 mx-auto" src={Accessories} alt='Accessories' />
        <h4 className="text-xl">Accessories</h4>
        </div>

        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
        <img className="mb-1 mx-auto" src={Gpu} alt='GPU' />
        <h4 className="text-xl">GPU</h4>
        </div>

        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
        <img className="mb-1 mx-auto" src={Headphone} alt='Headphone' />
        <h4 className="text-xl">Headphone</h4>
        </div>

        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
        <img className="mb-1 mx-auto" src={Ssd} alt='Ssd' />
        <h4 className="text-xl">SSD</h4>
        </div>


        
      </div>

      <div className="md:grid">
      <div class="p-24 flex flex-wrap items-center justify-center">
    
    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={transformStyle}>
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={bgStyle}></div>
        <img class="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" />
      </div>
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">Indoor</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">Peace Lily</span>
          <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
        </div>
      </div>
    </div>
    {/* <div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
        <img class="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png" alt="" />
      </div>
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">Outdoor</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">Monstera</span>
          <span class="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$45.00</span>
        </div>
      </div>
    </div> */}
    {/* <div class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
        <img class="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" />
      </div>
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">Outdoor</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">Oak Tree</span>
          <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
        </div>
      </div>
    </div> */}
    
  </div>
      </div>
    </div>
  );
};

export default Category;

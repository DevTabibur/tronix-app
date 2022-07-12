import React from "react";
import "./Category.css";

import Desktop from "../../../assets/images/desktop-48x48.png";
import Laptop from "../../../assets/images/laptop-48x48.png";
import Cpu from "../../../assets/images/cpu-48x48.png";
import Accessories from "../../../assets/images/accessories-48x48.png";
import Gpu from "../../../assets/images/gpu-48x48.png";
import Headphone from "../../../assets/images/headphone-48x48.png";
import Ssd from "../../../assets/images/SSD-48x48.png";
import Webcam from "../../../assets/images/webcam-48x48.png";

const Category = () => {
 

  return (
    <div className="mx-auto container px-4">
      <div className="section-title pt-5">
        <h2 className="text-3xl">Featured Category</h2>
        <p>Get Your Desired Product from Featured Category!</p>
      </div>
      <div className="category-options md:grid grid-cols-8 gap-4 text-center">
        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
          <img className="mb-1 mx-auto" src={Desktop} alt="desktop" />
          <h4 className="text-xl">Desktop</h4>
        </div>

        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
          <img className="mb-1 mx-auto" src={Laptop} alt="Laptop" />
          <h4 className="text-xl">Laptop</h4>
        </div>

        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
          <img className="mb-1 mx-auto" src={Webcam} alt="Webcam" />
          <h4 className="text-xl">Webcam</h4>
        </div>

        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
          <img className="mb-1 mx-auto" src={Cpu} alt="Cpu" />
          <h4 className="text-xl">CPU</h4>
        </div>

        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
          <img className="mb-1 mx-auto" src={Accessories} alt="Accessories" />
          <h4 className="text-xl">Accessories</h4>
        </div>

        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
          <img className="mb-1 mx-auto" src={Gpu} alt="GPU" />
          <h4 className="text-xl">GPU</h4>
        </div>

        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
          <img className="mb-1 mx-auto" src={Headphone} alt="Headphone" />
          <h4 className="text-xl">Headphone</h4>
        </div>

        <div className="category hover:text-red-900 text-center mx-2 p-3 rounded border">
          <img className="mb-1 mx-auto" src={Ssd} alt="Ssd" />
          <h4 className="text-xl">SSD</h4>
        </div>
      </div>

      
    </div>
  );
};

export default Category;

import React from "react";
import { useParams } from "react-router-dom";
import useOnePD from "../../Hooks/useOnePD";
import "./OnePD.css";

const OnePD = () => {
  const { id } = useParams();
  const [oneProduct] = useOnePD(id);
  const {
    name,
    price,
    style,
    category,
    product_id,
    ram,
    Processor_Type,
    Brand,
    Model,
    Graphics,
    Display_Size,
    Laptop_Series,
    mainImage,
    sideImage,
    sideImage2,
  } = oneProduct;
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="md:grid grid-cols-2">
          <div className="left-pd">
            <div className="img-box">
              <img src={mainImage} alt="product-img" />
            </div>
          </div>

          <div className="right-pd">
            <h1 className="text-2xl">{name}</h1>
            <h6 className="text-sm"> Product Id:{product_id}</h6>
            <h3 className="text-xl">Special Price: ${price}</h3>
            <div className="quick-overview">
            <h2 className="text-2xl my-3">Quick Overview</h2>
              <ul>
                <li className="mb-1">RAM {ram}</li>
                <li className="mb-1">Series {Laptop_Series}</li>
                <li className="mb-1">Processor_Type {Processor_Type}</li>
                <li className="mb-1">Graphics {Graphics}</li>
                <li className="mb-1">Display {Display_Size}</li>
              </ul>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePD;

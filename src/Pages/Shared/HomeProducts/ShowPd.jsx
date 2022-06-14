import React from "react";
import { Link } from "react-router-dom";

const ShowPd = ({ pd }) => {
  const {
    id,
    name,
    category,
    reviews,
    oldPrice,
    newPrice,
    Description,
    quantity,
    mainImage,
    sideImage,
    sideImage2,
    sideImage3,
  } = pd;
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="p-4">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={mainImage}
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY: {category}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {name}
            </h2>
            <p className="mt-1">${newPrice}</p>
          </div>
          <Link to={`/${id}`}>VIEW MORE</Link>
        </div>
      </section>
    </>
  );
};

export default ShowPd;

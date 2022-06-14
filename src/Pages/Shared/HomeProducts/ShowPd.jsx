import React from "react";

const ShowPd = ({ pd }) => {
  const {
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
      <div className="container mx-auto px-4">
        <h2>Hello world</h2>
      </div>
    </>
  );
};

export default ShowPd;

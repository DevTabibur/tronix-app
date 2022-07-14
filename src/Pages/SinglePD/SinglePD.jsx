import React from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import "./SinglePD.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faHeart, faEye } from "@fortawesome/free-solid-svg-icons";

const SinglePD = ({pd, handleAddToCart}) => {
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
    Laptop_Series,
    mainImage,
    sideImage,
    sideImage2,
  } = pd;


  return (
    <>
      <div className="box">
            <div className="img-box">
              <img src={mainImage} alt="product_img" />
              <div className="links">
                <ul>
                  <li onClick={()=> handleAddToCart(pd)} className="mb-3 text-xl"><FontAwesomeIcon className="icons" icon={faCartArrowDown} /></li>
                  <li className="mb-3 text-xl"><FontAwesomeIcon className="icons" icon={faHeart} /></li>
                  <li className=" text-xl"><FontAwesomeIcon className="icons" icon={faEye} /></li>
                </ul>
              </div>
            </div>
            <Link to={`/product/${pd._id}`} className="details mb-5 text-center mx-auto">
              <h2 className="font-semibold mb-1">{category}</h2>
              <h4 className="">{name.slice(0, 25)}</h4>
              <h6 className="font-mono">${price}</h6>
            </Link>
          </div>
    </>
  );
};

export default SinglePD;

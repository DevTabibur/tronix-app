import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading/Loading";
import { useQuery } from "react-query";

const useProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:5000/products")
    .then((res) => res.json())
    .then(data =>{
    //   console.log(data);
      setProducts(data)
    })
  }, []);
  return [products];
};

export default useProduct;

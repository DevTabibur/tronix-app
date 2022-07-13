import React, { useState } from "react";
import Loading from "../Shared/Loading/Loading";
import { useQuery } from "react-query";

const useCart = () => {
  const [cart, setCart] = useState([]);

  // data load all products
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/products").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleAddToCart = (pd) => {
    // console.log(pd);
    // do not do this: cart.push(product);
    const newCart = [...cart, pd];
    setCart(newCart);
  };
  return [cart, setCart, products, refetch, handleAddToCart];
};

export default useCart;

import React, { useState } from 'react'
import useProduct from './useProduct';

const useCart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (pd) => {
    // console.log(pd);
    // do not do this: cart.push(product);
    const newCart = [...cart, pd];
    setCart(newCart);
  };
  return [cart, handleAddToCart];
}

export default useCart
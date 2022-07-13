import React, { useEffect, useState } from 'react';

const useOnePD = (id) => {
    const [oneProduct, setOneProduct] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOneProduct(data)
        })
    }, [])
  return [oneProduct, setOneProduct];
  
}

export default useOnePD
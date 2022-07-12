
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import SinglePD from "../SinglePD/SinglePD";
import "./Shop.css";

const Shop = () => {
  // showing how many products we want to show in a single page
  const [size, setSize] = useState(10);
  // how many page we want to use...page counting
  const [pageCount, setPageCount] = useState(10);

  // currently what page we are staying?
  const [pages, setPages] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPages(pages);
      });
  }, []);

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

  return (
    <>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl">Products </h2>
        {/* <div className='pagination-btn text-gray-900 font-bold flex'>
            {
              [...Array(pageCount).keys()].map(number => <button onClick={()=>setPages(number)} className={pages === number ? 'selected': ''}>{number + 1}</button>)
            }
            {size}
            <select className='ml-5' onChange={ e => setSize(e.target.value)}>
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
            </select>
          </div> */}

        
        <div className="md:grid grid-cols-4 gap-4 py-10">
        {products.map((pd) => (
            <SinglePD key={pd._id} pd={pd} refetch={refetch} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;

import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
  // showing how many products we want to show in a single page
  const [size, setSize] = useState(10);
  // how many page we want to use...page counting
  const [pageCount, setPageCount] = useState(10);

  // currently what page we are staying?
  const [pages, setPages] = useState(0);

  useEffect(()=>{
    fetch('http://localhost:5000/productCount')
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      const count = data.count;
      const pages = Math.ceil(count/10)
      setPages(pages)
    })
  }, [])

  return (
    <>
        <div className='container mx-auto px-4'>
        <h2 className='text-3xl'>Products</h2>
          <div className='pagination-btn text-gray-900 font-bold flex'>
            {
              [...Array(pageCount).keys()].map(number => <button onClick={()=>setPages(number)} className={pages === number ? 'selected': ''}>{number + 1}</button>)
            }
            {/* {size} */}
            <select className='ml-5' onChange={ e => setSize(e.target.value)}>
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
            </select>
          </div>
        </div>
    </>
  )
}

export default Shop
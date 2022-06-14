import React, { useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import './HomeProducts.css';
import ShowPd from './ShowPd';

const HomeProducts = () => {
    const [products] = useProducts();
  return (
    <>
        <div className='container mx-auto px-4'>
        <div className="md:grid grid-cols-3 gap-3">
            {
                products.map(pd => <ShowPd
                    key={pd.id}
                    pd={pd}
                />)
            }
            </div>
        </div>
    </>
  )
}

export default HomeProducts
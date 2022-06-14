import React, { useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import './HomeProducts.css';
import ShowPd from './ShowPd';

const HomeProducts = () => {
    const [products] = useProducts();
  return (
    <>
        <div className='container mx-auto px-4'>
            {
                products.map(pd => <ShowPd
                    key={pd.id}
                    pd={pd}
                />)
            }
        </div>
    </>
  )
}

export default HomeProducts
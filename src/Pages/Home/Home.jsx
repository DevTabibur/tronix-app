import React from 'react';
import Category from '../Shared/Category/Category';
import Shop from '../Shop/Shop';
import Banner from './Banner';
import './Home.css';

const Home = () => {
  return (
    <>
        {/* <Banner/> */}
        <Category/>
        <Shop/>

    </>
  )
}

export default Home;
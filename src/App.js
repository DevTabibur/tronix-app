import Header from "./Pages/Shared/Header/Header";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Checkout from "./Pages/Checkout/Checkout";
import Shop from "./Pages/Shop/Shop";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Blog from "./Pages/Blog/Blog";
import SinglePD from "./Pages/SinglePD/SinglePD";
import Profile from "./Pages/Dashboard/Profile/Profile";
import PostBlog from "./Pages/Post/PostBlog/PostBlog";
import PostProducts from "./Pages/Post/PostProducts/PostProducts";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import RequireAuth from "./Pages/Shared/RequireAuth/requireAuth";
import AllUser from "./Pages/Dashboard/AllUser/AllUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyCart from "./Pages/Dashboard/MyCart/MyCart";
import MyWishList from "./Pages/Dashboard/MyWishList/MyWishList";
import Manage from "./Pages/Dashboard/Manage/Manage";
import RequireAdmin from "./Pages/Shared/RequireAdmin/RequireAdmin";
import OnePD from "./Pages/Shared/OnePD/OnePD";
import { useEffect, useState } from "react";

// demo11  https://www.ryanscomputers.com/
// demo22  https://www.startech.com.bd/

function App() {
  // const [cart, setCart] = useState([]);
  // const [products, setProducts] = useState([]);
  // useEffect(()=>[
  //   fetch(`http://localhost:5000/products`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setProducts(data);
  //   })
  // ], [])
  // const handleAddToCart = (pd) => {  
  //   const newCart = [...cart, pd];
  //   setCart(newCart);
  // };

  return (
    <>
      <ToastContainer />

      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>

        {/* Load single Data */}
        <Route path="/home/:id" element={<SinglePD />}></Route>
        {/* <Route path="/:id" element={<SinglePD />}></Route> */}
        {/* dashboard routes */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Profile />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route
            path="all-user"
            element={
              <RequireAdmin>
                <AllUser />
              </RequireAdmin>
            }
          ></Route>
          <Route path="post-blog" element={<PostBlog />}></Route>
          <Route path="post-products" element={<PostProducts />}></Route>
          <Route path="my-cart" element={<MyCart />}></Route>

          <Route path="manage" element={<Manage />}></Route>
          <Route path="my-wishlist" element={<MyWishList />}></Route>
        </Route>

        {/* single product */}
        <Route path="/product/:id" element={<OnePD/>}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/:id" element={<SingleBlog />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;

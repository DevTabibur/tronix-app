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

function App() {
  return (
    <>
      <Header ></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>

        {/* Load single Data */}
        <Route path="/home/:id" element={<SinglePD/>}></Route>
        <Route path="/:id" element={<SinglePD/>}></Route>
        {/* dashboard routes */}
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route index element={<Profile/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
        </Route>
        
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;

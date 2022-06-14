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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;

import Header from "./Pages/Shared/Header/Header";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;

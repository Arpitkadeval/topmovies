import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Contacta from "./components/pages/Contacta";
import Aboud from "./components/pages/Aboud";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Addusee from "./components/users/Addusee";
import Edit from "./components/users/Edit";
import User from "./components/users/User";
import Myproj from "./components/netfex/Myproj";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/aboud" element={<Aboud />} />
            <Route exact path="/contact" element={<Contacta />} />
            <Route exact path="/users/add" element={<Addusee />} />
            <Route exact path="/users/edit/:id" element={<Edit />} />
            <Route exact path="/users/:id" element={<User />} />
            <Route exact path="/" element={<Myproj />} />
            <Route exact path="/userslist" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

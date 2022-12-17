import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";

//npm i react-router-dom
const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;

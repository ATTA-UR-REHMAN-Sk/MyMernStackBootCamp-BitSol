import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login";
import Post from "../post/Post";
import PostDetails from "../post/PostDetails";
import Register from "../Register";

//npm i react-router-dom
const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Post-Details/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;

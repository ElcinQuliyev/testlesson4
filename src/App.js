import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Posts from "./moduls/Posts";
import Todos from "./moduls/Todos";
import Loging from "./moduls/Login/Loging";
import Navbar from "./components/Navbar";
import { ROUTES } from "./router";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* ancaq routern icerisine yazilir  */}
        <Route path="" element={<Navigate to="/login" />} />
        <Route path={ROUTES.post} element={<Posts />} />
        <Route path={ROUTES.todo} element={<Todos />} />
        <Route path={ROUTES.login} element={<Loging />} />
      </Routes>
    </>
  );
}

export default App;
